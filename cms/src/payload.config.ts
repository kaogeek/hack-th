import { buildConfig } from 'payload/config'
import path from 'path'

import Users from './collections/Users'
import Projects from './collections/Projects'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Projects],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
