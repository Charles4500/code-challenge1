function gradeGot(marks){
  if(marks >= 79){
    console.log("That is an A");
  }
  else if (marks <= 79 && marks >= 60){
      console.log("That is a B");
  }
  else if( marks <= 59 && marks >= 49){
      console.log("That is a C");
  }
  else if(marks <= 49 && marks >= 40){
      console.log("That is a D")
  }
  else ( console.log("That is an E "))
}

// You input the marks here and the grade displays according to where the marks fall.
gradeGot (35);
