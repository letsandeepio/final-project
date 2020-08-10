import minuteTimeConvert from './minuteTimeConvert';
import shuffleArray from './shuffleArray';

export default function sortActivities(
  activitiesArray,
  category,
  time,
  sortStyle
) {
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
  if (sortStyle === 'keith') {
    let filteredActivitiesCopy = [...filteredActivities];
    filteredActivities = [];
    filteredActivitiesCopy.sort((a, b) =>
      a.duration < b.duration ? 1 : b.duration < a.duration ? -1 : 0
    );
    const twentyEighty = Math.round(filteredActivitiesCopy.length * 0.2);
    const twentyArray = shuffleArray(
      filteredActivitiesCopy.slice(0, twentyEighty + 1)
    );
    const eightyArray = shuffleArray(
      filteredActivitiesCopy.slice(
        twentyEighty + 1,
        filteredActivitiesCopy.length
      )
    );
    for (let i = 0; i < (eightyArray.length > 0 ? eightyArray.length : twentyArray.length); i++) {
      if (twentyArray[i]) {
        filteredActivities.push(twentyArray[i]);
      }
      filteredActivities.push(eightyArray[i]);
    }
  }
  if (sortStyle === 'duration') {
    filteredActivities.sort((a, b) =>
      a.duration < b.duration ? 1 : b.duration < a.duration ? -1 : 0
    );
  }
  if (sortStyle === 'random') {
    filteredActivities = shuffleArray(filteredActivities);
  }
  return { activities: filteredActivities, hasActivities };
}
