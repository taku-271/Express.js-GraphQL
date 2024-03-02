/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { getTodos as Query_getTodos } from './src/resolvers/Query/getTodos';
import    { Todo } from './src/resolvers/Todo';
    export const resolvers: Resolvers = {
      Query: { getTodos: Query_getTodos },
      
      
      Todo: Todo
    }