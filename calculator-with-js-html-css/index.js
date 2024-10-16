const display = document.getElementById("display");


function appendtoDisplay(input){
    console.log(`the input is ${input}`);
    display.value += input;
    
}

function cleardisplay(){
    display.value = " ";
}

function enter(){
    let answer = eval(display.value);
    display.value = answer;
}