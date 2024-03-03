import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  todo: async (source, args, context) => {
    const todos = await context.prisma.todo.findMany({
      where: { user_id: source.id },
    });

    return todos.map((todo) => {
      return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        isCompleted: todo.is_completed,
        userId: todo.user_id,
      };
    });
  },
};
