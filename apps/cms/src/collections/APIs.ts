import { CollectionConfig } from 'payload/types'
import { BackpopulateField } from '../fields/Backpopulate'

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
    BackpopulateField({
      name: 'projects',
      relationFrom: 'projects',
      relationField: 'apis',
      label: 'Projects',
    }),
  ],
}

export default APIs
