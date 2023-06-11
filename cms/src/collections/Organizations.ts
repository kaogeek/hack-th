import { CollectionConfig } from 'payload/types'
import { BackpopulateField } from '../fields/Backpopulate'

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
    BackpopulateField({
      name: 'projects',
      relationFrom: 'projects',
      relationField: 'organizations',
      label: 'Projects',
    }),
  ],
}

export default Organizations
