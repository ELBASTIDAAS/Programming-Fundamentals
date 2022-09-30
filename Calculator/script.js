function calculate(){
    console.log('Calculating')
    let value1 = Number(prompt('Enter a value'));
    let value2 = Number(prompt('Enter a second value'));
    sum(value1,value2)
    
}
function sum(value1,value2){
    let plus = value1 + value2
    let multi = value1 * value2
    let res = value1 - value2
    let div = value1 / value2
    document.getElementById("sumRes").innerHTML = `<p>${value1} + ${value2} = ${plus}</p>`;
    document.getElementById("plusRes").innerHTML = `<p>${value1} * ${value2} = ${multi}</p>`;
    document.getElementById("resRes").innerHTML = `<p>${value1} - ${value2} = ${res}</p>`;
    document.getElementById("divRes").innerHTML = `<p>${value1} / ${value2} = ${div}</p>`;
}