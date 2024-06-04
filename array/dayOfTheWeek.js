function dayOfTheWeek(number) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  
  if (number >= 1 && number <= 7){
      let currDay = days [number - 1]
      
console.log(currDay);

  }
  else { 
    console.log("Invalid day!");
  }
}
dayOfTheWeek(5);
