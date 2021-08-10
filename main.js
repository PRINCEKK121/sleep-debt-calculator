const getSleepHours = day => {
  day = day.toLowerCase();
  let sleepHours;

  switch(day) {
    case 'monday':
      sleepHours = 5;
      break;
    case 'tuesday':
      sleepHours = 4;
      break;
    case 'wednesday':
      sleepHours = 7;
      break;
    case 'thursday':
      sleepHours = 6;
      break;
    case 'friday':
      sleepHours = 10;
      break;
    case 'saturday':
      sleepHours = 8;
      break;
    case 'sunday':
      sleepHours = 7;
      break;
    default: 
      console.log(`${day} is not a day!`);
      break;
  }

  return sleepHours;
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;

  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours of sleep. You got more rest than needed.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours of sleep. Get some rest!`);
  }
};

calculateSleepDebt();
