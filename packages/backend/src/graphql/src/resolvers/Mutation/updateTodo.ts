import type { MutationResolvers } from "./../../../types.generated";
export const updateTodo: NonNullable<MutationResolvers['updateTodo']> = async (
  _parent,
  _arg,
  _ctx
) => {
  await _ctx.prisma.todo.update({
    where: { id: _arg.input.id },
    data: {
      is_completed: _arg.input?.isCompleted,
    },
  });

  return true;
};
