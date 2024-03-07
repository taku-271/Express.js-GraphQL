import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CreateTodoInput,
  UpdateTodoInput,
  getSdk,
} from "../../../graphql/graphql";
import { getGraphqlClient } from "@/libs/graphql-client";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createTodo"],
    mutationFn: async (input: CreateTodoInput) => {
      return getSdk(await getGraphqlClient()).createTodo({ input: input });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTodo"],
    mutationFn: async (input: UpdateTodoInput) => {
      return getSdk(await getGraphqlClient()).updateTodo({ input: input });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
