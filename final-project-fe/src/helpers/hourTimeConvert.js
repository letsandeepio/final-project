import pluralize from 'pluralize';

export default function hourTimeConvert(durationMinutes) {
  const hours = Math.floor(durationMinutes/60);
  const minutes = durationMinutes % 60;
  const pluralizedHours = pluralize("hour", hours);
  const pluralizedMinutes = pluralize("minute", minutes);
  return `${hours} ${pluralizedHours} ${minutes} ${pluralizedMinutes}`
}