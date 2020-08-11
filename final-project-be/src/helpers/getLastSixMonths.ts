export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function getLastSixMonths(): any {
  const today = new Date();
  let d;
  let month;
  const array = [];

  for (let i = 5; i > 0; i -= 1) {
    d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    month = monthNames[d.getMonth()];
    array.push(month.substr(0, 3));
  }
  array.push(monthNames[today.getMonth()].substr(0, 3));
  return array;
}
