"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../../../apollo/client";
import { PropsWithChildren } from "react";

export const WithApolloProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
