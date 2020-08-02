import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      name: 'Keith',
      email: 'keith123@gmail.com',
      password: 'lasagna'
    }
  });
  const users = await prisma.users.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
