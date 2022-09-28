const tax = 12;
let UserName="Miguel Antonio"
let age = 23;
let email = "miguel.bastidas18@tectijuana.edu.mx"
let title = "Netflix"
let movies = 50;
let buscar = "search"
let phone = 6647238264;
let dolar = 19;
let animal = "Panda"
let x = 'a'
let r = 13.5;
let fax = 982361723;
let son = "daniela"
let morechar = 'R'



//console.log("My name is: "+ userName + " and my age is: "+age);
//console.log("the constant values is "+ tax);

document.write("<p> Name: "+UserName +" and the age is: "+age+ "</p>");

document.write(`<p>Name: ${UserName} </p><p>age is: ${age}</p><p> Email: ${email}</p><p>Title: ${title}</p><p>Total movies: ${movies}</p><p>${buscar}</p><p>Your number is: ${phone}</p><p>Dolar price: ${dolar}</p><p>Animal: ${animal}</p><p>Character: ${x}</p><p>this is a double: ${r}</p><p>TAX: ${tax}</p><p>FAX: ${fax}</p><p>My son: ${son}</p><p>More character: ${morechar}</p>`)

//let video = './video.mp4'
//let author = 'BastidasV'

//console.log(a + b)

//let name = 'Mike'
//document.write(``)


let a = 1;
let b = 2;
let c = 3;

function testSum(){
    let sum = a + b;
    {
        let sum = a + c;
        
    }
    return sum
}