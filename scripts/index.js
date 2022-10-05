

let userData = JSON.parse(localStorage.getItem("userData"));


let container = document.getElementById("container");

let name = document.createElement("p")
name=userData.name;
let email = document.createElement("p");
email=userData.email
let number = document.createElement("p")
number=userData.number
let div = document.createElement("div");
container.append(name,email,number)
//container.append(div);
console.log(userData)


