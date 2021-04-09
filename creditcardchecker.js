// This is a Codecademy exercise/solution

//########################STARTER CODE######################################################################################################################################

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//########################STARTER CODE END###################################################################################################################################

// Add your functions below:
function validateCred(cardArray) {
  cardLength = chkCardLength(cardArray);
  //console.log(cardLength);
  const arrOdd = oddArray(cardArray, cardLength);
  const arrEven = evenArray(cardArray, cardLength);
  //console.log(arrOdd);
  //console.log(arrEven);
  //sum up both arrays
  const sumOdd = arrOdd.reduce(function (result, item) {
  return result + item;
  }, 0);
  //console.log(sumOdd);
  const sumEven = arrEven.reduce(function (result, item) {
  return result + item;
  }, 0);
  //console.log(sumEven);
  let sumTotal = sumOdd+sumEven;
  //console.log(sumTotal);
  if ((sumTotal%10)===0) {
    //console.log(true);
    return true;
  } else {
    //console.log(false);
    return false;
  }
}

// function to check card length
function chkCardLength(card) {
  return card.length-1
}

// create odd array
function oddArray(card, cardLength) {
  oddArr=[];
  for (let y = cardLength; y>=0; y-=2 ) {
    oddArr.push(card[y]);
  }
  //console.log(oddArr);
  return oddArr;  
}

// create even array
function evenArray(card, cardLength) {
  evenArr=[];
  for (let z = cardLength-1; z>=0; z-=2 ) {
  evenArr.push(card[z]);
  }
  //console.log(evenArr);
  return computeEvenArr(evenArr);
  //return evenArr;
}

// re-computation of even array
function computeEvenArr(evenArr) {
  let newCEvenArr = [];
  for (let i=0; i<evenArr.length; i++) {
    
    if ((evenArr[i]*2)>9) {
      newCEvenArr.push((evenArr[i]*2)-9); 
    } else {
      newCEvenArr.push(evenArr[i]*2); 
    }
  }
  //console.log(newCEvenArr);
  return newCEvenArr;
}

// function to combine even and odd numbers array to a singular nested array
function combineEvenOdd(arrEven, arrOdd) {
  let combineArr = []
  for (let a=0; a<arrEven.length; a++) {
    combineArr.push(arrEven[a]);
    for (let b=0; b<arrOdd.length; b++) {
      combineArr.push(arrOdd[b]);
    }
  }
  //console.log(combineArr)
  return combineArr;
}

// function to check for invalid cards
function findInvalidCards(nestArr) {
  let invalidArr = [];
  for (let i=0; i<nestArr.length; i++) {
    if (validateCred(nestArr[i]) === false) {
      invalidArr.push(nestArr[i]);
    }
  }
  console.log(invalidArr);
  return invalidArr;
}

// function to check credit card type, such as Visa, Mastercard, Amex or Discover
function idInvalidCardCompanies(findcoy) {
    let invalidcoyArr = [];
  for (let i=0; i<findcoy.length; i++) {

    /*
    if (findcoy[i][0]!=3 || findcoy[i][0]!=4 ||findcoy[i][0]!=5 ||findcoy[i][0]!=6 ) {
      console.log("Company not found")
    } */
    
      if (findcoy[i][0] === 3) {
      invalidcoyArr.push('Amex');
    } else if (findcoy[i][0] === 4) {
      invalidcoyArr.push('Visa');
    } else if (findcoy[i][0] === 5) {
      invalidcoyArr.push('Mastercard');
    } else if (findcoy[i][0] === 6) {
      invalidcoyArr.push('Discover');
    }
  }
  console.log(invalidcoyArr);
  let chars = invalidcoyArr;
  let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);
}


//Running the functions
validateCred(mystery5);
findInvalidCards(batch);

let badcoy = findInvalidCards(batch);

idInvalidCardCompanies(badcoy);
