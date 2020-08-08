import { getUserId } from '../helpers';

function info() {
  return `Eileen, Keith and Sandeep are setting up Authentication!`;
}

async function activities(parent: any, args: any, context: any) {
  const userId = getUserId(context);
  const iActivities = await context.prisma.activity.findMany({
    where: { user_id: userId, status: 'incomplete' }
  });
  return iActivities;
}

export default {
  info,
  activities
};
