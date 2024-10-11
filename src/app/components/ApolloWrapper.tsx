"use client";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../../apollo/client";

interface ApolloWrapperProps {
  children: ReactNode;
}

export default function ApolloWrapper({ children }: ApolloWrapperProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
