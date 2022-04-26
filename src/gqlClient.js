import ApolloClient from "apollo-boost";
import { InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Apikey ${process.env.REACT_APP_API_KEY}`,
  },
  cache: new InMemoryCache(),
});
