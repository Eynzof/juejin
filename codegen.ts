import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["src/graphql/**/*.graphql", "src/graphql/**/*.ts"],
  ignoreNoDocuments: false, // for better experience with the watcher
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        withComponent: true,
      },
    },
  },
};

export default config;
