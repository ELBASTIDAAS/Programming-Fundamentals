/* //----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
let studentName = prompt("Enter student name");; //string, "",'',``
let studentAge = prompt("Enter student age");; //number 1,0000000, 1.3, any number
let gpa = prompt("Enter GPA");; //boolean

let newGPA = .3 + Number(gpa);
document.write("<p> Name: " + studentName + "</p>"); //concatenation
document.write("<p> Age: " + studentAge + "</p>");
document.write("<p> GPA: " + newGPA + "</p>");
 */ 

let tax = .08;

let product = prompt("Enter your product");
let cantidad = prompt("Enter amount");
let price = prompt("Enter the price");

let subtotal = (Number(price) * Number(cantidad))
let whitax= subtotal + (subtotal * tax);

document.write("<p class='p-text'> El producto seleccionado es: " + product +"</p>");
document.write("<p class='p-text'> Cantidad de producto: " + cantidad +"</p>");
document.write("<p class='p-text'> El precio unitario es: " + price +"</p>");
document.write("<p class='p-text'> El subtotal es: " + subtotal +"</p>");
document.write("<p class='p-text'> El total con impuestos es: " + whitax +"</p>");
