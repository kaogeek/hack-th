import { buildConfig } from 'payload/config'
import path from 'path'

import APIs from './collections/APIs'
import Hackathons from './collections/Hackathons'
import Organizations from './collections/Organizations'
import Pains from './collections/Pains'
import Projects from './collections/Projects'
import Services from './collections/Services'
import Users from './collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    APIs,
    Hackathons,
    Organizations,
    Pains,
    Projects,
    Services,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
