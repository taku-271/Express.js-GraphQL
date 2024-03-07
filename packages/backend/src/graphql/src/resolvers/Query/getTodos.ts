import type { QueryResolvers } from "./../../../types.generated";
export const getTodos: NonNullable<QueryResolvers['getTodos']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const todos = await _ctx.prisma.todo.findMany({
    where: {
      user_id: _arg.userId,
    },
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
};
