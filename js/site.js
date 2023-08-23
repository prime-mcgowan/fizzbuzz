//get user inputted values (Fizz Value and Buzz Value)
function getValues() {
  //get user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //validate the input values (parse to check the values are numbers)
  //check to make sure the values are integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let numbers = generateNumbers(fizzValue, buzzValue);
    displayNumbers(numbers);
  } else {
    alert("You must enter numbers");
  }

  //call fizzBuzz
  //call displayData
}

function fizzBuzz(fizzValue, buzzValue) {
  //init the returnArray
  let returnArray = [];

  //loop from 1-100
  for (let i = fizzValue; i <= buzzValue; i++) {
    number.push(i);
  }
  return numbers;

  //check current value in three steps
  // 1. Divisible by both 3 and 5 push 'FizzBuzz' into array
  // 2. Divisible by 3 push 'Fizz' into array
  // 3. Divisible by 5 push 'Buzz' into array

  //if none of the above are true push number into array

  //return the array
  returnArray;
}

function displayData(fbArray) {
  //loop over the array and create a tablerow for each item
  //add all the rows to the table
}
