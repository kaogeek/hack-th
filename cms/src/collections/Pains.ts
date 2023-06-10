import { CollectionConfig } from 'payload/types'

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
    // TODO: #4 Populate back-reference to Projects,
  ],
}

export default Pains
