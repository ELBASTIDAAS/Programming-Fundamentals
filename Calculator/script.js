function calculate(){
    console.log('Calculating')
    let value1 = Number(prompt('Enter a value'));
    let value2 = Number(prompt('Enter a second value'));
    sum(value1,value2)
    
}
function sum(value1,value2){
    let suma = value1 + value2
    document.getElementById("sumRes").innerHTML = `<p>${value1} + ${value2} = ${suma}</p>`;
}