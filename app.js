let number1 = 0;
let number2 = 0;
let totalNumber = 0;

// Roll 2 dices together
  function rollDice() {

    refreshNumber()

      function rollFirstDice() {
          const dice = [...document.querySelectorAll("#die-1")];
          dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber1(1, 6);
          });

          setTimeout(function()
          {
            announceNumber1(number1)
          }, 1250)

          return number1
      }

      function rollSecondDice() {
          const dice = [...document.querySelectorAll("#die-2")];
          dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber2(1, 6);
          });

          setTimeout(function()
          {
            announceNumber2(number2)
          }, 1250)

          return number2
      }

    rollFirstDice()
    rollSecondDice()
    addition()
  }
  

// Generate numbers randomly
  function getRandomNumber1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Get a random number between 1 and 6 
    number1 =  Math.floor(Math.random() * (max - min + 1)) + min;
    return number1
  }

  function getRandomNumber2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Get a random number between 1 and 6 
    number2 =  Math.floor(Math.random() * (max - min + 1)) + min;
    return number2
  }

// Toggle dices
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

// Get total number from 2 dices and show total number
  function addition() {
    setTimeout(function() {
      totalNumber = number1 + number2;
      document.getElementById("total-number").innerHTML = totalNumber;
      // console.log(totalNumber);
    }, 1400)
  }

// Set all numbers to zero before new roll
  function refreshNumber() {
    document.getElementById("number-1").innerHTML = 0;
    document.getElementById("number-2").innerHTML = 0;
    document.getElementById("total-number").innerHTML = 0;
  }

// Show first dice number
  function announceNumber1() {
    document.getElementById("number-1").innerHTML = number1;
  }

// Show second dice number
  function announceNumber2() {
    document.getElementById("number-2").innerHTML = number2;
  }

// Activate dice roll
  document.getElementById("roll-button").addEventListener("click", rollDice);