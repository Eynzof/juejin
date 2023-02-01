import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "../src/generated/graphql";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { GRAPHQL_API_URL } = publicRuntimeConfig;

const gqlClient = new GraphQLClient(GRAPHQL_API_URL);

export const { getMenus } = getSdk(gqlClient);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
