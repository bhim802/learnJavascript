// Day 04 Project: Grade Calculator

// TODO: Use if/else if/else to assign a letter grade to the `grade` variable

// TODO: Print the letter grade

// TODO: Use a switch statement on `grade` to print feedback for each grade

//! DAys
//const day = "Saturday";
//
//switch (day) {
//    case "Monday":
//    case "Tuesday":
//    case "Wednesday":
//    case "Thursday":
//    case "Friday":
//      console.log("is it Weekday?");
//      break;
//    case "Saturday":
//    case "Sunday":
//        console.log("it is Weekend!");
//        break;
//    default:
//        console.log("im tired boss");
//
//}

const score = 87;
if (typeof score !== "number" || score < 0 || score > 100) {
  console.log("score must be number between 0 to 100");
} else {
  let gradeS;

  if (score >= 90) {
    gradeS = "A";
  } else if (score >= 80) {
    gradeS = "B";
  } else if (score >= 70) {
    gradeS = "C";
  } else if (score >= 60) {
    gradeS = "D";
  } else {
    gradeS = "F";
  }

  let modifierS = "";
  const lastDigit = score % 10;

  if (gradeS !== "f") {
    if (score === 100 || lastDigit >= 7) {
      modifierS = "+";
    } else if (lastDigit <= 2) {
      modifierS = "-";
    }
  }

  const fgrade = gradeS + modifierS;

  console.log("your score", { score });
  console.log("your grade", { fgrade });

  switch (gradeS) {
    case "A":
      console.log("Great!");
      break;
    case "B":
      console.log("Good Job!");
      break;
    case "C":
      console.log("Not Bad!");
      break;
    case "D":
      console.log("Good!");
      break;
    case "F":
      console.log("Work Hard!");
      break;
    default:
      console.log("error");
  }
}
