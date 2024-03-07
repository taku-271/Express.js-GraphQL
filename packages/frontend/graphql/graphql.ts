import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Scalars['Boolean']['output'];
  deleteTodo: Scalars['Boolean']['output'];
  updateTodo: Scalars['Boolean']['output'];
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodos?: Maybe<Array<Maybe<Todo>>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetTodosArgs = {
  userId: Scalars['Int']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isCompleted: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export type UpdateTodoInput = {
  id: Scalars['Int']['input'];
  isCompleted: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  todo?: Maybe<Array<Maybe<Todo>>>;
};


export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input)
}
    `;
export const CreateTodoDocument = gql`
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input)
}
    `;
export const GetTodosByUserIdDocument = gql`
    query getTodosByUserId($userId: Int!) {
  getTodos(userId: $userId) {
    id
    title
    description
    isCompleted
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTodo', 'mutation', variables);
    },
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo', 'mutation', variables);
    },
    getTodosByUserId(variables: GetTodosByUserIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTodosByUserIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodosByUserIdQuery>(GetTodosByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTodosByUserId', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: boolean };

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: boolean };

export type GetTodosByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetTodosByUserIdQuery = { __typename?: 'Query', getTodos?: Array<{ __typename?: 'Todo', id: number, title: string, description?: string | null, isCompleted: boolean } | null> | null };
