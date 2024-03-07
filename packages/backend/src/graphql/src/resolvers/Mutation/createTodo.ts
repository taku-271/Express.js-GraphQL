import type { MutationResolvers } from "./../../../types.generated";
export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (
  _parent,
  _arg,
  _ctx
) => {
  await _ctx.prisma.todo.create({
    data: {
      title: _arg.input.title,
      description: _arg.input.description,
      user_id: _arg.input.userId,
    },
  });
  return true;
};
