import { CollectionConfig } from 'payload/types'
import { BackpopulateField } from '../fields/Backpopulate'

const Hackathons: CollectionConfig = {
  slug: 'hackathons',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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
      relationField: 'hackathons',
      label: 'Projects',
      collectionSlug: 'hackathons',
    }),
  ],
}

export default Hackathons
