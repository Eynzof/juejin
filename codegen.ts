import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['src/graphql/**/*.graphql', 'src/graphql/**/*.ts'],
  ignoreNoDocuments: false, // for better experience with the watcher
  generates: {
    './src/gql/result.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withComponent: true
      },
    }
  }
}

export default config