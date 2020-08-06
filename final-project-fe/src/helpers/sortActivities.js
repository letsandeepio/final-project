import minuteTimeConvert from "./minuteTimeConvert";

export default function sortActivities(activitiesArray, category, time) {
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
  }

  for (let activity of activitiesArray) {
    if (categoryFilter === "") {
      if (activity.duration <= minuteTimeConvert(time)) {
        filteredActivities.push(activity);
      }
    } else if (activity.category === categoryFilter && activity.duration <= minuteTimeConvert(time)) {
      filteredActivities.push(activity);
    }
  }

  return filteredActivities;
}
