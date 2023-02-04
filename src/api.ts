import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";

import { getSdk } from "./generated/graphql";

const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API_URL);

export { gqlClient };

export const { getMenus, getArticles } = getSdk(gqlClient);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
