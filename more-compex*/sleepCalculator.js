const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 4;

    case "Tuesday":
      return 6;

    case "Wednesday":
      return 7;
    case "Thursday":
      return 8;
    case "Friday":
      return 8;

    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
  }
};

const getActualSleepHours = () => {
  let totalSleepHours =
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");

  return Number(totalSleepHours);
};

const getIdealSleepHours = idealHours => {
 

  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log("You are getting perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You have got more sleep than needed!");
  } else {
    console.log("You should get some rest!");
  }

  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  } else {
    console.log(
      "You have" +
        (actualSleepHours - idealSleepHours) +
        "hour(s) overslept this week. Try to be more productive! "
    );
  }
};

calculateSleepDebt();

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());
