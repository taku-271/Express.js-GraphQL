import { useQuery } from "@tanstack/react-query";
import { GetTodosByUserIdQuery, getSdk } from "../../../graphql/graphql";
import { getGraphqlClient } from "@/libs/graphql-client";

export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return getSdk(await getGraphqlClient()).getTodosByUserId({ userId: 1 });
    },
  });
};
