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

