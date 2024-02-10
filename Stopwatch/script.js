const startButton=document.getElementById('start');
const stopButton=document.getElementById('stop');
const resetButton=document.getElementById('reset');
const tensValue=document.getElementById('tens');
const secondsValue=document.getElementById('seconds');

let tens=0;
let seconds=0;
let timer;

startButton.addEventListener('click',()=>{ 
    clearInterval(timer);
    timer=setInterval(starttimer,10);
});

stopButton.addEventListener('click',()=>{ 
    clearInterval(timer);
});

resetButton.addEventListener('click',()=>{ 
    clearInterval(timer);
    tens=0;
    seconds=0;
    tensValue.innerHTML="00";
    secondsValue.innerHTML="00";
});

function starttimer(){
    tens++;

    if(tens>9){
        tensValue.innerHTML=tens;
    }
    else{
        tensValue.innerHTML="0"+tens;
    }
    if(tens>99){
        seconds++;
        if(seconds<=9){
            secondsValue.innerHTML="0"+seconds
        }
        else{
            secondsValue.innerHTML=seconds;
        }
        tens=0;
        tensValue.innerHTML="0"+tens;
        
    }
}