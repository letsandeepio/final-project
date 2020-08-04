function info() {
  return `Eileen, Keith and Sandeep are setting up Authentication!`;
}

async function activities(parent: any, args: any, context: any) {
  const activities = await context.prisma.activity.findMany({
    where: { user_id: args.userId}
  })
  return activities;
}

export default {
  info,
  activities
};
