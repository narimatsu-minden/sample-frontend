/* eslint-disable */
import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type UpdateUserInput = {
  /** Userのメールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** Userの名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateUserInput = {
  /** Userのメールアドレス */
  email: Scalars["String"]["input"];
  /** Userの名前 */
  name: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
  removeUser: User;
  updateUser: User;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  user: User;
};

export type QueryUserArgs = {
  id: Scalars["Int"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};
