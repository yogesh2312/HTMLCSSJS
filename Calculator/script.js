"use strict";

const result=document.getElementById('result');
const input=document.getElementById('input');
const numbers=document.querySelectorAll('.numbers div button');
const operators=document.querySelectorAll('.operator-panel button');
let isResult=false;
//number handlers
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',()=>{
        if(isResult){
            input.innerHTML='';
            isResult=false;
        }
        let currentString=input.innerHTML;
        let lastChar=currentString[currentString.length-1];
        if(numbers[i].innerHTML=='AC'){
            currentString='';
        }
        else{
            currentString=currentString+numbers[i].innerHTML
        }
        input.innerHTML=currentString;
        
    })
}

//operator handler
for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click',()=>{
        isResult=false;
        let currentString=input.innerHTML;
        if(currentString.length<=0){
            return;
        }
        let lastChar=currentString[currentString.length-1];
        if(lastChar=='+' && lastChar=='-' && lastChar=='&times;' && lastChar=='&divide;'){
            currentString = currentString.substring(0,currentString.length-2)+operators[i].innerHTML;
        }
        else{
            currentString=currentString+operators[i].innerHTML
        }
        input.innerHTML=currentString;
    })
}

//equal handler
result.addEventListener('click',()=>{
    var currentString = input.innerHTML;

    var numbersArr = currentString.trim().split(/\+|\-|\×|\÷/g);
  
    var operatorsArr = currentString.trim().replace(/[0-9]|\./g, "").split("");

    let divide=operatorsArr.indexOf('÷')
    while(divide != -1){
        numbersArr.splice(divide,2,numbersArr[divide]/numbersArr[divide+1]);
        operatorsArr.splice(divide,1);
        divide=operatorsArr.indexOf('÷')
    }

    let multiply=operatorsArr.indexOf('×')
    while(multiply != -1){
        numbersArr.splice(multiply,2,numbersArr[multiply]*numbersArr[multiply+1]);
        operatorsArr.splice(multiply,1);
        multiply=operatorsArr.indexOf('×')
    }

    let add=operatorsArr.indexOf('+')
    while(add != -1){
        numbersArr.splice(add,2,parseFloat(numbersArr[add])+parseFloat(numbersArr[add+1]));
        operatorsArr.splice(add,1);
        add=operatorsArr.indexOf('+')
    }

    let subtract=operatorsArr.indexOf('-')
    while(subtract != -1){
        numbersArr.splice(subtract,2,numbersArr[subtract]-numbersArr[subtract+1]);
        operatorsArr.splice(subtract,1);
        subtract=operatorsArr.indexOf('-')
    }

    input.innerHTML=numbersArr[0];
    isResult=true;

})