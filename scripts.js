
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const display = document.querySelector("#display");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
let firstNumber;
let secondNumber;
let operator;
let shouldResetDisplay = false;
display.style.fontSize = "30px"
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
operators.forEach((opt) =>{
    
    opt.addEventListener("click", () =>{
        firstNumber = display.textContent;
        operator = opt.textContent;
        shouldResetDisplay = true;
    })});

 equal.addEventListener("click", ()=>{
    if(firstNumber && operator){
        secondNumber = display.textContent;
    }
    const result = operate(operator,firstNumber,secondNumber);
    display.textContent = result;
    shouldResetDisplay = true;
    firstNumber = result;
    operator = null;
    });

clear.addEventListener("click",() =>{
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = false;
})

