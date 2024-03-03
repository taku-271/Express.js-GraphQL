import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "testUser",
    },
  });
  await prisma.todo.create({
    data: {
      title: "test1",
      description: "test1 description",
      user_id: 1,
    },
  });
  await prisma.todo.create({
    data: {
      title: "test2",
      description: "test2 description",
      user_id: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
