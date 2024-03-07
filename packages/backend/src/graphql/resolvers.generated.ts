/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { createTodo as Mutation_createTodo } from './src/resolvers/Mutation/createTodo';
import    { deleteTodo as Mutation_deleteTodo } from './src/resolvers/Mutation/deleteTodo';
import    { updateTodo as Mutation_updateTodo } from './src/resolvers/Mutation/updateTodo';
import    { getTodos as Query_getTodos } from './src/resolvers/Query/getTodos';
import    { getUsers as Query_getUsers } from './src/resolvers/Query/getUsers';
import    { Todo } from './src/resolvers/Todo';
import    { User } from './src/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { getTodos: Query_getTodos,getUsers: Query_getUsers },
      Mutation: { createTodo: Mutation_createTodo,deleteTodo: Mutation_deleteTodo,updateTodo: Mutation_updateTodo },
      
      Todo: Todo,
User: User
    }