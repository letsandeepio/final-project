function getHoursAndMinutes() {
  const hourArray = 'one two three four five six seven eight nine ten'.split(
    ' '
  );
  const string = 'two hours and 25 minutes'.split(' ');
  let hours = 0;
  let minutes = 0;

  string.forEach((item, index) => {
    if (item.includes('hour')) {
      hours = Number(string[index - 1]);
      if (isNaN(hours)) {
        console.log(hours);
      }
    }
    if (item.includes('minute')) {
      minutes = string[index - 1];
    }
  });

  console.log(`Hours: ${hours} & minutes: ${minutes}`);
}

getHoursAndMinutes();
