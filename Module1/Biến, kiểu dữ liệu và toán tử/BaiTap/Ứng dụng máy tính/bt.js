let number1= document.getElementById('number1');
let number2= document.getElementById('number2');
let resultInput =document.getElementById("result")
let result=0;


function add() {
    // result=parseInt(number1.value) + parseInt(number2.value)
    resultInput.value=parseInt(number1.value) + parseInt(number2.value);
}
function sub() {
    result=parseInt(number1.value) - parseInt(number2.value)
    resultInput.value=result;
}
function multi() {
    result=parseInt(number1.value) * parseInt(number2.value)
    resultInput.value=result;
}
function divi() {
    result=parseInt(number1.value) / parseInt(number2.value)
    resultInput.value=result;
}
//
// let number1= document.getElementById('number1');
// let n1=parseInt(number1.value)
// let number2= document.getElementById('number1');
// let n2=parseInt(number2.value)
// let result = document.getElementById("result")
//
// console.log(typeof n1)
//
// function add() {
//     result.value=n1+n2;
//     console.log(n1)
//     console.log(result)
// }
// function sub() {
//     result=number1-number2;
// }
// function multi() {
//     result=number1*number2;
// }
// function divi() {
//     result=number1/number2;
// }