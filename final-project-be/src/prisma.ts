import { PrismaClient } from '@prisma/client';
import { getMaxListeners } from 'process';

const prisma = new PrismaClient();

async function main() {
  // create new activity

  const updateActivity = await prisma.activity.update({
    where: { id: 10 },
    data: { duration: 30 }
  });

  const allActivities = await prisma.activity.findMany({
    where: { user_id: 2 }
  });
  console.log(allActivities);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });

async function createActivity() {
  await prisma.activity.create({
    data: {
      title: 'superstar',
      category: 'watch',
      duration: 120,
      completed: 0,
      owner: { connect: { id: 2 } }
    } as any
  });
}
