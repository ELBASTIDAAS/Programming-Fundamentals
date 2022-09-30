
let tax = .08;
let user1="admin";
let pass1="password";
let price =2350;
let cart = 0;
let total = 0;
let quantity = 0;
let product;

let userName=prompt('Enter your username: "admin"')
let password=prompt('Enter your username: "password"')
console.log(userName,password)

if(userName==user1 && password==pass1){
    document.write("<p class='p-text'> Thanks for you're recent purchase </p> " +userName)
}else{
    document.write("create an account")
}

function Checkout(){
    product = prompt("Enter your product");
    quantity = prompt("Enter amount");
    cart = price * quantity
    total= cart + (cart * tax);
    console.log(product,quantity,cart,total)
}
function displayInfo(){
    document.write(`
    <p class='p-text'> product:  ${product} </p>
    <p class='p-text'> Quantity:  ${quantity} </p>
    <p class='p-text'> Cart:  ${cart} </p>
    <p class='p-text'> Tax:  ${tax} </p>
    <p class='p-text'> Tota:  ${total} </p>
    `)
}
Checkout()
displayInfo()

