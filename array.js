// //program 1

// let num = [1,2,3,4,5,6,7,8,9];
// let om = num.map (function(num){    // .map() a javascript ni method chhe je array na badha element par action kare ane return pan kare chhe 
//     return num + 2;
// });
// console.log(om); // new array ne display par show karave chhe ane teni andar (om "a new array nu name che")
// //////////////////////////////////////////////////////////////////////////////////////////////////////


//proggram 2
// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// let userInput = prompt("Enter a number:");

// let number = parseInt(userInput);


// let result = checkEvenOrOdd(number);

// alert("The number is " + result);


function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even");
  } else {
    console.log(number + " is Odd");
  }
}
