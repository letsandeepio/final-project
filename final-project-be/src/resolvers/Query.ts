import { getUserId } from '../helpers';

import getThreeImagesFromBing from '../bing-api';
import { getLastSixMonths, monthNames } from '../helpers/getLastSixMonths';

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

async function inProgress(parent: any, args: any, context: any) {
  const userId = getUserId(context);
  const iActivities = await context.prisma.activity.findMany({
    where: { user_id: userId, status: 'progress' }
  });
  return iActivities;
}

async function completeActivities(parent: any, args: any, context: any) {
  const userId = getUserId(context);
  const iActivities = await context.prisma.activity.findMany({
    where: { user_id: userId, status: 'complete' }
  });
  return iActivities.sort(
    (a: any, b: any) => Number(b.completed_on) - Number(a.completed_on)
  );
}

async function images(parent: any, args: any, context: any) {
  console.log('Querying bing for: ' + args.searchTerm);
  return await getThreeImagesFromBing(args.searchTerm);
}

async function getStats(parent: any, args: any, context: any) {
  const userId = getUserId(context);
  const iActivities = await context.prisma.activity.findMany({
    where: { user_id: userId }
  });

  const completeActivityCount = iActivities.filter(
    (item: any) => item.status === 'complete'
  ).length;

  const incompleteActivityCount = iActivities.filter(
    (item: any) => item.status === 'incomplete'
  ).length;

  const monthlyBarChart = getLastSixMonths().map((item: any) => {
    return { name: item, subtotal: 0 };
  });

  iActivities
    .filter((item: any) => item.status === 'complete')
    .forEach((item: any) => {
      const month = monthNames[
        new Date(Number(item.completed_on)).getMonth()
      ].substr(0, 3);
      for (const iMonth of monthlyBarChart) {
        if (iMonth.name === month) {
          iMonth.subtotal = iMonth.subtotal + 1;
        }
      }
    });

  const categoryBreakdown: any = [];

  iActivities.forEach((item: any) => {
    if (!categoryBreakdown.includes(item.category)) {
      categoryBreakdown.push(item.category);
    }
  });

  const inCompleteCategoryBreakdown = categoryBreakdown.map((item: any) => {
    return {
      name: item,
      subtotal: 0
    };
  });

  iActivities
    .filter((item: any) => item.status === 'incomplete')
    .forEach((item: any) => {
      for (const cat of inCompleteCategoryBreakdown) {
        if (item.category === cat.name) {
          cat.subtotal = cat.subtotal + 1;
        }
      }
    });

  const completeCategoryBreakdown = categoryBreakdown.map((item: any) => {
    return {
      name: item,
      subtotal: 0
    };
  });

  iActivities
    .filter((item: any) => item.status === 'complete')
    .forEach((item: any) => {
      for (const cat of completeCategoryBreakdown) {
        if (item.category === cat.name) {
          cat.subtotal = cat.subtotal + 1;
        }
      }
    });

  const stats = {
    completeActivityCount,
    incompleteActivityCount,
    monthlyBarChart,
    inCompleteCategoryBreakdown,
    completeCategoryBreakdown
  };

  return JSON.stringify(stats);
}

const data = [
  { name: 'Jan', subtotal: 90 },
  { name: 'Feb', subtotal: 30 },
  { name: 'Mar', subtotal: 50 },
  { name: 'Apr', subtotal: 40 },
  { name: 'May', subtotal: 70 },
  { name: 'Jun', subtotal: 30 }
];

const tata = [
  { name: 'Eat', subtotal: 10 },
  { name: 'Watch', subtotal: 13 },
  { name: 'Cook', subtotal: 11 },
  { name: 'Others', subtotal: 15 }
];

export default {
  info,
  activities,
  images,
  inProgress,
  completeActivities,
  getStats
};
