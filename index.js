const input = document.getElementById("input");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const btn = document.getElementById("submit");
const ansText = document.getElementById("degree");

btn.onclick = function (){
    if(select1.value == 'Fahrenheit' && select2.value == 'Celsius'){
        console.log("fah to cel is");
    const fahval = input.value;
    let ans = (fahval - 32) * 5/9;
    const decimal = ans.toFixed(2);
    ansText.textContent = `°${decimal}C`;
    }


    if(select1.value == 'Celsius' && select2.value == 'Fahrenheit'){
        console.log("cel to fah is");
        const celval = input.value;
        let ans = (9/5 * celval) + 32;
        const decimal = ans.toFixed(2);
        ansText.textContent = `${decimal}F`;
    }
    
    
    if(select1.value == 'Fahrenheit' && select2.value == 'Fahrenheit'){
        console.log("cel to fah is");
        const fahval = input.value;
        let ans = (fahval);
        ansText.textContent = `°${ans}C`;
    }
    
    
    if(select1.value == 'Celsius' && select2.value == 'Celsius'){
        console.log("cel to fah is");
        const celval = input.value;
        let ans = (celval);
        ansText.textContent = `${ans}F`;
    }
    

}
