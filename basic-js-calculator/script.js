let num1 = "first number";
let num2 = "second number";
let sign = "symbol";


const nmuber1 = Number(prompt(`input ${num1}`));
console.log(nmuber1);

const signs = prompt(`input your ${sign}`);
console.log(signs);

const number2 = Number(prompt(`input ${num2}`));
console.log(number2);

if(signs == "+"){
    console.log(nmuber1 + number2);
}

if(signs == "-"){
    console.log(nmuber1 - number2);
}

if(signs == "*"){
    console.log(nmuber1 * number2);
}

if(signs == "/"){
    console.log(nmuber1 / number2);
}

