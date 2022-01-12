let number1 = 0;
let number2 = 0;
let number3 = 0;
let totalNumber = 0;
let numberGenerated = 0;

// Roll 2 dices
  function rollTwoDice() {

    refreshNumber()

      function rollFirstDice() {
          const dice = [...document.querySelectorAll("#die-1")];
          dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber1(1, 6);
          });

            number1 = numberGenerated

          return number1
      }

      function rollSecondDice() {
          const dice = [...document.querySelectorAll("#die-2")];
          dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber2(1, 6);
          });

          // setTimeout(function()
          // {
          //   announceNumber2(number2)
          // }, 1250)

          return number2
      }

    rollFirstDice()
    rollSecondDice()
    addition()
  }

// Rooll 1 dice
  function rollDice() {

    refreshNumber()

      function rollThirdDice() {
          const dice = [...document.querySelectorAll("#die-3")];
          dice.forEach(die => {
            toggleClasses(die);
            die.dataset.roll = getRandomNumber1(1, 6);
          });

          setTimeout(function()
          {
            number3 = numberGenerated
            announceNumber3(number3)
          }, 1250)

          return number3
      }

    rollThirdDice()
  }

// Generate numbers randomly
  function getRandomNumber1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // this is written to be reusable to support the 1 Dice option
    numberGenerated =  Math.floor(Math.random() * (max - min + 1)) + min;
    return numberGenerated
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
    // document.getElementById("number-1").innerHTML = 0;
    // document.getElementById("number-2").innerHTML = 0;
    document.getElementById("total-number").innerHTML = 0;
    document.getElementById("number-3").innerHTML = 0;
  }

// Show first dice number
  function announceNumber1() {
    // document.getElementById("number-1").innerHTML = number1;
  }

// Show second dice number
  function announceNumber2() {
    // document.getElementById("number-2").innerHTML = number2;
  }

// Show third dice number
  function announceNumber3() {
    document.getElementById("number-3").innerHTML = number3;
  }

// Activate dice roll
  document.getElementById("roll-button-1").addEventListener("click", rollTwoDice);
  document.getElementById("roll-button-2").addEventListener("click", rollDice);