import { todo } from "@prisma/client";
import type { QueryResolvers, Todo } from "./../../../types.generated";
export const getTodos: NonNullable<QueryResolvers['getTodos']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const todos = await _ctx.prisma.todo.findMany();

  return todos.map((todo) => convert(todo));
};

const convert = (entity: todo): Todo => {
  return {
    id: entity.id,
    title: entity.title,
    description: entity.description,
    isCompleted: entity.is_completed,
  };
};
