import { CollectionConfig } from 'payload/types'

const Projects: CollectionConfig = {
  slug: 'projects',
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
      name: 'slug',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'radio',
      options: [
        {
          label: 'Not Started',
          value: 'NOT_STARTED',
        },
        {
          label: 'In Development',
          value: 'IN_DEVELOPMENT',
        },
        {
          label: 'Released',
          value: 'RELEASED',
        },
        {
          label: 'Done',
          value: 'DONE',
        },
      ],
      required: true,
    },
    {
      name: 'organizations',
      type: 'relationship',
      relationTo: 'organizations',
      hasMany: true,
    },
    {
      name: 'apis',
      label: 'APIs',
      type: 'relationship',
      relationTo: 'apis',
      hasMany: true,
    },
    {
      name: 'pains',
      type: 'relationship',
      relationTo: 'pains',
      hasMany: true,
    },
    {
      name: 'hackathons',
      type: 'relationship',
      relationTo: 'hackathons',
      hasMany: true,
    },
  ],
}

export default Projects
