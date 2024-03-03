import { user } from "@prisma/client";
import type { QueryResolvers, User } from "./../../../types.generated";
import { UserModel } from "../../../model";
export const getUsers: NonNullable<QueryResolvers['getUsers']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const users = await _ctx.prisma.user.findMany();
  return users.map((user) => convert(user));
};

const convert = (entity: user): UserModel => {
  return {
    id: entity.id,
    name: entity.name,
  };
};
