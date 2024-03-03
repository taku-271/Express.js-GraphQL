import { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "src/schema.graphql",
  generates: {
    "../backend/src/graphql/": defineConfig({
      typesPluginsConfig: {
        contextType: "../context#GraphQLContext",
      },
    }),
    "../frontend/graphql/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
