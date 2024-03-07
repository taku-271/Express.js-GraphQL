import { useGetTodosQuery } from "./query";

export const useGetTodos = () => {
  const { data, isLoading, error } = useGetTodosQuery();

  if (error) {
    throw error;
  }

  return { todos: data?.getTodos, isGetTodosLoading: isLoading };
};
