var number = 0;
var totalNumber = 0;

function rollDice() {

    function rollFirstDice() {
        const dice = [...document.querySelectorAll("#die-1")];
        dice.forEach(die => {
          toggleClasses(die);
          die.dataset.roll = getRandomNumber(1, 6);
        });
        announceNumber1(number)
        firstNumber = number

        console.log(firstNumber)
        return firstNumber
    }

    function rollSecondDice() {
        const dice = [...document.querySelectorAll("#die-2")];
        dice.forEach(die => {
          toggleClasses(die);
          die.dataset.roll = getRandomNumber(1, 6);
        });
        announceNumber2(number)
        secondNumber = number;

        console.log(secondNumber)
        return secondNumber;
    }

    function finalNumber() {
        var span1 = document.getElementById("number-1");
        var span2 = document.getElementById("number-2");
        var text1 = span1.textContent;
        var text2 = span2.textContent;
        var firstNumber = Number(text1);
        var secondNumber = Number(text2);
        totalNumber = secondNumber + firstNumber;
        console.log(totalNumber)
    }

    finalNumber()
    rollFirstDice()
    rollSecondDice()
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }


  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Get a random number between 1 and 6 
    number =  Math.floor(Math.random() * (max - min + 1)) + min;
    return number
  }

    function announceNumber1() {
        document.getElementById("number-1").innerHTML = number;
    }

    function announceNumber2() {
        document.getElementById("number-2").innerHTML = number;
    }   

  document.getElementById("roll-button").addEventListener("click", rollDice);