/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getUsers as Query_getUsers } from './src/resolvers/Query/getUsers';
import    { Todo } from './src/resolvers/Todo';
import    { User } from './src/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getUsers: Query_getUsers },
      
      
      Todo: Todo,
User: User
    }