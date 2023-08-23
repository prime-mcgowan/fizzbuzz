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
    displayData(fbArray);
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
  return returnArray;
}

function displayData(fbArray) {
  //get table body element from the page
  let tableBody = document.getElementById("results");

  //get the template rows
  let templateRow = document.getElementById("fbTemplate");

  //clear table first
  tableBody.innerHTML = "";

  //loop over the array and create a tablerow for each item
  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index + 1]);
    rowCols[1].textContent = fbArray[index + 1];

    rowCols[2].classList.add(fbArray[index + 2]);
    rowCols[2].textContent = fbArray[index + 2];

    rowCols[3].classList.add(fbArray[index + 3]);
    rowCols[3].textContent = fbArray[index + 3];

    rowCols[4].classList.add(fbArray[index + 4]);
    rowCols[4].textContent = fbArray[index + 4];

    tableBody.appendChild(tableRow);
  }
}
