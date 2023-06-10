import { CollectionConfig } from 'payload/types'

const APIs: CollectionConfig = {
  slug: 'apis',
  labels: {
    singular: 'API',
    plural: 'APIs',
  },
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
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: false,
    },
  ],
}

export default APIs
