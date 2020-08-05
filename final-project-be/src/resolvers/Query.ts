function info() {
  return `Eileen, Keith and Sandeep are setting up Authentication!`;
}

import { getUserId } from '../helpers';

async function activities(parent: any, args: any, context: any) {
  const allActivities = await context.prisma.activity.findMany({
    where: { user_id: args.userId }
  });
  return allActivities;
}

export default {
  info,
  activities
};
