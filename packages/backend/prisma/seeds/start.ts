import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.create({
    data: {
      title: "test1",
      description: "test1 description",
    },
  });
  await prisma.todo.create({
    data: {
      title: "test2",
      description: "test2 description",
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
