import type { MutationResolvers } from "./../../../types.generated";
export const deleteTodo: NonNullable<MutationResolvers['deleteTodo']> = async (
  _parent,
  _arg,
  _ctx
) => {
  await _ctx.prisma.todo.delete({
    where: { id: _arg.id },
  });

  return true;
};
