import { getUserId } from '../helpers';

import getThreeImagesFromBing from '../bing-api';

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

async function images(parent: any, args: any, context: any) {
  console.log('Querying bing for: ' + args.searchTerm);
  return await getThreeImagesFromBing(args.searchTerm);
}

export default {
  info,
  activities,
  images
};
