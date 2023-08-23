//get user inputted values (Fizz Value and Buzz Value)
function getValues() {
  //get user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //validate the input values (parse to check the values are numbers)
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  //check to make sure the values are integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //call fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    //call displayData
  } else {
    alert("You must enter numbers");
  }
}

function fizzBuzz(fizzValue, buzzValue) {
  //init the returnArray
  let returnArray = [];

  //loop from 1-100
  for (let i = 1; i <= 100; i++) {
    //check current value in three steps

    // 1. Divisible by both 3 and 5 push 'FizzBuzz' into array
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
      // 2. Divisible by 3 push 'Fizz' into array
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
      // 3. Divisible by 5 push 'Buzz' into array
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
      //if none of the above are true push the number into array
    } else {
      returnArray.push(i);
    }
  }
  //return the array
  returnArray;
}

function displayData(fbArray) {
  //loop over the array and create a tablerow for each item
  //add all the rows to the table
}
