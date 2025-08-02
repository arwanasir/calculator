
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const display = document.querySelector("#display");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;
display.style.fontSize = "30px";

function roundResult(num) {
  return Math.round(num * 100000) / 100000;
}


function operate(operator, a , b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            return b != 0 ? a /b : "error";
        default:
            return null;
    }
}

// operators.forEach((opt) =>{
    
//     opt.addEventListener("click", () =>{
//         firstNumber = display.textContent;
//         operator = opt.textContent;
//         shouldResetDisplay = true;
//     })});

// operators.forEach((opt) => {
//     opt.addEventListener("click", () => {

//         if (shouldResetDisplay) {
//             operator = opt.textContent;
//             return;
//     }

//         if (firstNumber && operator) {

//             secondNumber = display.textContent;
//             const result = operate(operator, firstNumber, secondNumber);
//             display.textContent = result;
//             firstNumber = result;
//     }   else {
//             firstNumber = display.textContent;
//     }
//         operator = opt.textContent;
//         shouldResetDisplay = true;
//   });
// });


//  equal.addEventListener("click", ()=>{
//     if(firstNumber || !operator || shouldResetDisplay){
//         secondNumber = display.textContent;
//     }
//     const result = operate(operator,firstNumber,secondNumber);
//     display.textContent = result;
//     shouldResetDisplay = true;
//     firstNumber = result;
//     operator = null;
//     });


nums.forEach((num) =>{
    num.addEventListener("click", () =>{
        const digit = num.textContent;
        if(display.textContent == '0' || shouldResetDisplay){
            display.textContent = digit;
            shouldResetDisplay = false;
    }  
        else {
            display.textContent += digit;
}})});


operators.forEach((opt) => {
    opt.addEventListener("click", () => {
    if (shouldResetDisplay && operator !== null) {
      operator = opt.textContent;
      return;
    }

    if (firstNumber && operator) {
        secondNumber = display.textContent;
        const result = roundResult(operate(operator, firstNumber, secondNumber));
        display.textContent = result;
        firstNumber = result;
    }
    else {
        firstNumber = display.textContent;
    }

    operator = opt.textContent;
    shouldResetDisplay = true;
  });
});



equal.addEventListener("click", () => {
    if (!firstNumber || !operator || shouldResetDisplay){
        display.textContent = "Incomplete Input";
        firstNumber = null;
        secondNumber = null;
        operator = null;
        shouldResetDisplay = true;
        return;
    } 
    secondNumber = display.textContent;
    const result = roundResult(operate(operator, firstNumber, secondNumber));
    display.textContent = result;
    firstNumber = result;
    operator = null;
    shouldResetDisplay = true;
});


clear.addEventListener("click",() =>{
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = false;
})

