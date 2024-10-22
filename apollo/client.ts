import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = process.env.BASE_URL;
export const client = new ApolloClient({
  uri: `http://${endpoint}/graphql`,
  cache: new InMemoryCache(),
});
