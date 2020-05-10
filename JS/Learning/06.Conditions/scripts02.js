function message(hour = null) {
  // let output = "";

  if(hour < 8) {
    output = "What are you doing that early?";
  }
  else if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  else if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  else if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  else if(hour >= 21 && hour <= 24) {
    output = "Good night!";
  }
  else {
    output = "Not sure what hour you typed :/"
  }
  
  show(output, "hour message");

};
message(15);