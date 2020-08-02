import pluralize from 'pluralize';

export default function hourTime(minutes) {
  const outputHours = Math.floor(minutes/60);
  const outputMinutes = minutes % 60;
  const pluralizedHours = pluralize("hour", outputHours);
  const pluralizedMinutes = pluralize("minute", outputMinutes);
  return `${outputHours} ${pluralizedHours} ${outputMinutes} ${pluralizedMinutes}`
}