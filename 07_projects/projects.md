# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project One

```Javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = 'blue';
        break;
      case "yellow":
        body.style.backgroundColor = 'yellow';
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
    }
    

  })
})


```

## Project Two

```Javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }
  else{
    results.innerHTML = `Your BMI is ${(weight/((height*height)/10000)).toFixed(2)}`
  }
});

```
## Project Three

```Javascript
const clock = document.getElementById('clock')
//const clock = document.querySelector("#clock")



setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML= date.toLocaleTimeString()
},1000)

```

## Project Four
```Javascript 
let randomNum = (parseInt(Math.random()*100 +1));  
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numOfGuesses = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
  e.preventDefault()
  const guess = parseInt(userInput.value)
  console.log(guess)
  validateGuess(guess)
})
}

function validateGuess(guess){
  //to validate the guessed number for valid values
  if(guess <1 || guess > 100 ||  isNaN(guess)){
    alert("Please enter a valid number")
  }
  else{
    prevGuess.push(guess);
    if(numOfGuesses === 11 ){
      displayGuess("guess")
      displayMessage(`Game Over, The Number was ${randomNum }`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)

 }}
}

function checkGuess(guess){
  if(guess=== randomNum){
    displayMessage("You guessed it right")
    endGame()
  }else if(guess< randomNum){
    displayMessage(`Number is too low`);
  }else if(guess > randomNum){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} , `;
  numOfGuesses++;
  remaining.innerHTML = `${11 - numOfGuesses}`;

}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){ 
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener('click', function(e){
    randomNum = parseInt(Math.random()*100+1);
    prevGuess = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numOfGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;

  })
}
 
```
