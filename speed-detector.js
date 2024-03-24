function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
      console.log("Ok");
      return "Ok"
  } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      if (points > 12) {
          console.log("License suspended");
          return "License suspended"
      } else {
          console.log("Points: " + points);
          return "Points: " + (points)
      }
  }
}

// Test the function with different speeds range
checkSpeed(70);