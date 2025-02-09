/* Problem Statementv:
     Create a game where you start with any random game number.
   Ask the user to keep guessing the game number until the user
   enters the correct value.*/

   let gameNum = 55;
   let userNum = prompt("Guess the Game Number :");

   while(gameNum != userNum)
   {
     userNum = prompt("Sorry! WrongNum Please Enter right Number");
   }
   console.log("Congratulations ! You Guess Right Number");