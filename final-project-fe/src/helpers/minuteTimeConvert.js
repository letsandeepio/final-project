export default function minuteTimeConvert(timeObject) {
  let minutes = 60 * timeObject.hours + timeObject.minutes;
  return minutes;
}