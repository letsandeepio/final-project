function getHoursAndMinutes(command) {
  const hourArray = 'one two three four five six seven eight nine ten'.split(
    ' '
  );
  let hours = 0;
  let minutes = 0;

  command = command.split(' ');

  command.forEach((item, index) => {
    if (item.includes('hour')) {
      let exHours = Number(command[index - 1]);
      if (isNaN(exHours)) {
        hours = hourArray.findIndex((item) => item === command[index - 1]) + 1;
      } else {
        hours = exHours;
      }
    }
    if (item.includes('minute')) {
      minutes = Number(command[index - 1]);
    }
  });

  return {
    hours,
    minutes
  };
}

export default getHoursAndMinutes;
