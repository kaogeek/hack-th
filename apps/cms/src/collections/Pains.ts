import { CollectionConfig } from 'payload/types'
import { BackpopulateField } from '../fields/Backpopulate'

const Pains: CollectionConfig = {
  slug: 'pains',
  admin: {
    useAsTitle: 'problem',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'problem',
      type: 'text',
      required: true,
    },
    {
      name: 'organizations',
      type: 'relationship',
      relationTo: 'organizations',
      hasMany: true,
    },
    BackpopulateField({
      name: 'projects',
      relationFrom: 'projects',
      relationField: 'pains',
      label: 'Projects',
    }),
  ],
}

export default Pains
