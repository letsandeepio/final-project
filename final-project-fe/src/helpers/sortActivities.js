import minuteTimeConvert from './minuteTimeConvert';

export default function sortActivities(activitiesArray, category, time) {
  console.log(activitiesArray);
  let filteredActivities = [];
  let categoryFilter = '';
  let hasActivities = false;
  switch (category) {
    case 'what should i watch?':
      categoryFilter = 'watch';
      break;
    case 'where should i eat?':
      categoryFilter = 'eat';
      break;
    case 'what should i cook?':
      categoryFilter = 'cook';
      break;
    case 'what else could i do?':
      categoryFilter = 'other';
      break;
    default:
      console.error('Unkown category type');
  }

  for (let activity of activitiesArray) {
    if (activity.status === 'incomplete') {
      if (categoryFilter === '') {
        hasActivities = true;
        if (activity.duration <= minuteTimeConvert(time)) {
          filteredActivities.push(activity);
        }
      } else {
        if (activity.category === categoryFilter) {
          hasActivities = true;
        }
        if (
          activity.category === categoryFilter &&
          activity.duration <= minuteTimeConvert(time)
        ) {
          filteredActivities.push(activity);
        }
      }
    }
  }
  return { activities: filteredActivities, hasActivities };
}
