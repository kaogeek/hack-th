import { CollectionConfig } from 'payload/types'

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
    // TODO: #2 Populate back-reference to Projects,
  ],
}

export default Hackathons
