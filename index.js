console.log("Welcome to NKSOFT Games.");
console.log("------------------------");
var rules = {
  rules: "\n1. SCORE 5 into Level 1 to Enter in Level 2. \n2. SCORE min 4 into Level 2 to Enter in Level 3. \n3. If you Score 14 or more than 14,\n   take screenshot and mail on [nksoftpune@gmail.com]"
}
console.log("Rules (🔊) : ","\n",rules.rules);
var readlineSync = require("readline-sync");
var aggriment = {
  Agree:"yes",
  Disagree:"no"
}
var accept = readlineSync.question("\n Do You Agree ?"+" yes/no \n");
if(accept==aggriment.Agree){
console.log("\nWelcome to Level 1");
console.log("\n------------------");
  var score = 0;
var userName = readlineSync.question("\nWhat's your Name ? ");
console.log("Welcome " + userName + "\n------------------");

console.log("Do YOU KNOW Navnath ");
console.log("\n");
//function play
function play(question, answer) {
  var userAnswer = readlineSync.question("Navnath >> "+question+"\n");
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong")
  }
  console.log("score is : " + score);
  console.log("---------------");
}


//Array of Object

var questions = [
  {
    question: "Where do I Live ?",
    answer: "latur"
  },
  {
    question: "My favorite superhero would be ?",
    answer: "ironman"
  },
  {
    question: "Where do I work (Company) ?",
    answer: "wipro"
  },
  {
    question: "What is my Birth Year ?",
    answer: "1994"
  },
  {
    question:"What is my fourite Food ?",
    answer: "Biryani"
  }
];


//for loop for execution of array

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  //console.log(currentquestion);
  play(currentquestion.question, currentquestion.answer);
}

console.log("YAY!!! You SCORED :", score);

var highscore = [
  {
    name: "Navnath",
    score: 3
  },
  {
    name: "Abhay",
    score: 3
  }
];

for (var i = 0; i < highscore.length; i++) {
  var hs = highscore[i];

  if (score >= hs.score) {
    console.log("Yay!!! You Beaten ", hs.name);
    break;
  }
  else {
    console.log("Ohhh You lost");
    console.log(hs.name, " have highscore ", hs.score);
    break;
  }
}
  if(score===5)
  {
    console.log("Hey "+userName+" Welcome to Level 2.");
    console.log("Stay Tuned...we are working on this \n Thank You. "+userName)
  }
  else
  {
    console.log("Opps "+userName+" you are not eligible for Level 2.");
  }
}
else{
  console.log("Please accept to Play.");
}



