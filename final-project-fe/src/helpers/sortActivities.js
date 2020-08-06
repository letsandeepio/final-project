import minuteTimeConvert from "./minuteTimeConvert";

export default function sortActivities(activitiesArray, category, time) {
  console.log(activitiesArray);
  let filteredActivities = []
  let categoryFilter = "";
  switch (category) {
    case "what should i watch?":
      categoryFilter = "watch";
      break;
    case "what should i eat?":
      categoryFilter = "eat";
      break;
    case "what should i cook?":
      categoryFilter = "cook";
      break;  
    case "what else could i do?":
      categoryFilter = "other";
      break;
    default:
      categoryFilter = "all";
  }

  for (let i = 0; i < activitiesArray.length; i++) {
    if (activitiesArray[i].category === categoryFilter && activitiesArray[i].duration <= minuteTimeConvert(time)) {
      filteredActivities.push(activitiesArray[i]);
    }
  }


  // for (let activity of activitiesArray) {
  //   if (activity.category === categoryFilter && activity.duration <= minuteTimeConvert(time)) {
  //     filteredActivities.push(activity);
  //   }
  // }

  return filteredActivities;
}
