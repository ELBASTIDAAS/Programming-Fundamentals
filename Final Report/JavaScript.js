
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("Input").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
    prompt("Write something");
    } else {
    document.getElementById("ul").appendChild(li);
    }
    document.getElementById("Input").value = "";

}