import { CollectionConfig } from 'payload/types'

const Services: CollectionConfig = {
  slug: 'services',
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
      hasMany: true,
    },
    {
      name: 'apis',
      label: 'APIs',
      type: 'relationship',
      relationTo: 'apis',
      hasMany: true,
    },
    // TODO: #service1 add virtual field "Organization" by populating projects' organizations
  ],
}

export default Services
