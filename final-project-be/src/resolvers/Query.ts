import { getUserId } from "../helpers";
import { Context } from '../index';

function info() {
  return `Eileen, Keith and Sandeep are setting up Authentication!`;
}

async function activities(parent: any, args: any, context: Context) {
  const userId = getUserId(context);
  const activities = await context.prisma.activity.findMany({
    where: { user_id: userId}
  })
  return activities;
}

export default {
  info,
  activities
};
