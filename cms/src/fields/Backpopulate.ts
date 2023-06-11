import { RelationshipField } from 'payload/dist/fields/config/types'
import { PaginatedDocs } from 'payload/dist/mongoose/types'
import { Config } from 'payload/generated-types'
import { Field, FieldHook } from 'payload/types'

type BackpopulateHookOptions<TSlug extends keyof Config['collections']> = Pick<
  BackpopulateFieldOptions<TSlug>,
  'relationFrom' | 'relationField'
>

function backpopulateHook<TSlug extends keyof Config['collections']>({
  relationFrom,
  relationField,
}: BackpopulateHookOptions<TSlug>): FieldHook {
  return async ({ req, data }) => {
    const { payload, collection } = req

    const fromCollection = payload.config.collections.find(
      collection => collection.slug === relationFrom
    )
    const field = fromCollection.fields.find(
      field => field.type == 'relationship' && field.name === relationField
    ) as RelationshipField // safe to cast because we checked for type
    if (!field) {
      throw new Error(
        `Could not find relationship field "${relationField}" in collection "${fromCollection.slug}" or `
      )
    }

    let relatedDocs: PaginatedDocs<Config['collections'][TSlug]>
    if (Array.isArray(field.relationTo)) {
      // TODO: backpopulate-1 handle backpopulation for polymorphic relationships
      throw new Error('polymorphic relationship backpopulation not implemented')
    } else if (field.relationTo === collection.config.slug) {
      relatedDocs = await payload.find({
        collection: relationFrom,
        pagination: false,
        where: {
          [relationField]: {
            // TODO: backpopulate-3 handle relationships with hasMany: false
            contains: data.id,
          },
        },
        depth: 0,
      })
    }

    const relatedIds = (relatedDocs?.docs ?? []).map(doc => doc.id)
    return relatedIds
  }
}

const clearFieldData: FieldHook = () => {
  return null
}

export interface BackpopulateFieldOptions<
  TSlug extends keyof Config['collections']
> {
  /**
   * The name of the field. Must be unique within the collection.
   */
  name: string

  /**
   * The collection to backpopulate relation from
   */
  relationFrom: TSlug

  /**
   * The field to backpopulate relation from
   */
  relationField: keyof Config['collections'][TSlug] & string

  /**
   * The label to display in the admin UI
   */
  label: string
}

export function BackpopulateField<TSlug extends keyof Config['collections']>({
  name,
  relationFrom,
  relationField,
  label,
}: BackpopulateFieldOptions<TSlug>): Field {
  return {
    name: name,
    type: 'relationship',
    label: label,
    admin: {
      readOnly: true,
    },
    relationTo: relationFrom,
    hasMany: true,
    hooks: {
      afterRead: [
        backpopulateHook({
          relationFrom,
          relationField,
        }),
      ],
      beforeChange: [clearFieldData],
    },
  }
}
