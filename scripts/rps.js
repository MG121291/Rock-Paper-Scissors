/* score is an object, its value is either what has been stored via localStorage as 'score', OR|| its value is 3 parameters with value, i.e. wins: 0 */

let score =  JSON.parse(localStorage.getItem
  ('score')) || {
    wins: 0,
    losses: 0,
    draws: 0,
  };

    /*the below function runs automatically by sitting in the script section and not linked to any event handlers.This means the scoreboard is always visible on the page, see its declaration for specs,  */

  updateScoreElement();

    /*declaring the functions below. Utilising the DOM query selector to change the scoreboard displayed on screen. Calls objects using dot notation to fetch the numbers */

  function updateScoreElement(){
        document.querySelector('.js-score')
         .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
  }

    /* the below function generates a float betwee 0 and 1 via Math.random() method. This number is saved as randomNumber variable. We then 'name' the number either Rock, Paper or Scissors with an If statement. If less than 1/3 then Rock, else < 2/3 Paper, else scissors. This name is assigned to computerMove variable */

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = randomNumber < 1 / 3 ? 'rock' : randomNumber < 2 / 3 ? 'paper' : 'scissors';
    return computerMove;
  }

  
  function playGame(playerMove) {

    // We assign the results of computerMove function as a variable //

    const computerMove = pickComputerMove();

    //Below we then declare result variable without a value. So that we can give it one via ELIF statement. If playermove === Rock and computerMove === Scissors, then the result = Win. Repeating statement to cover all outcomes//

    let result;
    if (playerMove === 'rock') {
      result = computerMove === 'rock' ? 'Draw.' : computerMove === 'paper' ? 'You lose.' : 'You win!';
    } 
    else if (playerMove === 'paper') { result = computerMove === 'rock' ? 'You win!' : computerMove === 'paper' ? 'Draw.' : 'You lose.';
    }
    else if (playerMove === 'scissors') { result = computerMove === 'rock' ? 'You lose.' : computerMove === 'paper' ? 'You win!' : 'Draw.';
    }

    // Here we use the same ELIF approach to create a counter for the score. Using a simple +=1 formula we update the score object and its respective properties via dot.notation. //

    if (result === 'You win!') {
      score.wins +=1;
    } else if (result === 'You lose.') {
      score.losses +=1;
    } else if (result === 'Draw.') {
      score.draws +=1;
    }

    // We take the above counter and update the Score element on the screen in realtime by running the below function//

    updateScoreElement();

    // The below simply updates the result (you win/lose) on the screen by targeting the P element of js-result //

    document.querySelector('.js-result')
      .innerHTML = `${result}`;

      // below runs the display of the playermove image on the screen//
      if (playerMove === 'rock') {
        document.querySelector('.js-player-moves')
          .innerHTML = `You
            <img src = "images/rock-emoji.png" class = "move-icon">`
    } else if (playerMove === 'paper') {
        document.querySelector('.js-player-moves')
          .innerHTML = `You
            <img src = "images/paper-emoji.png" class = "move-icon">`
    } else if (playerMove === 'scissors') {
        document.querySelector('.js-player-moves')
          .innerHTML = `You
            <img src = "images/scissors-emoji.png" class = "move-icon">`
    }

    // below runs the display of the computermove image on the screen//
        if (computerMove === 'rock') {
          document.querySelector('.js-computer-moves')
            .innerHTML = `<img src = "images/rock-emoji.png" class = "move-icon"> 
              Computer`
      } else if (computerMove === 'paper') {
          document.querySelector('.js-computer-moves')
            .innerHTML = `<img src = "images/paper-emoji.png" class = "move-icon"> 
             Computer`
      } else if (computerMove === 'scissors') {
          document.querySelector('.js-computer-moves')
            .innerHTML = `<img src = "images/scissors-emoji.png" class = "move-icon"> 
              Computer`
      }

      // the below displays the moves selected on the screen, but in images. Because playerMove and computerMove are saved as strings, the variable can be used as a substitute for part of the name of the file. E.g. if playerMove is 'Rock' then the displayed image will be rock-emoji.png. //

    /* The below code works locally but not on GIT
    document.querySelector('.js-moves')
      .innerHTML = `You
      <img src = "images/rock-emoji.png" class = "move-icon">
      <img src = "images/-emoji.png" class = "move-icon">
      Computer`;*/
  }    
