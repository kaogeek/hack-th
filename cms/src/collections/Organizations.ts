import { CollectionConfig } from 'payload/types'

const Organizations: CollectionConfig = {
  slug: 'organizations',
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
      name: 'tags',
      type: 'select',
      options: ['Civic', 'Government'],
    },
    // TODO: #org1 Populate back-reference to Projects,
  ],
}

export default Organizations
