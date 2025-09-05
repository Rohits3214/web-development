let para1 = document.createElement("p");
para1.textContent = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("para1");   

let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
document.querySelector("body").append(h3)
h3.classList.add("h3");   

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText= "Click Me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);

// input.setAttribute("placeholder", "username");
// btn.setAttribute("id", "btn");

// let btn = document.querySelector("btn");
// btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "DOM practice";
document.querySelector("body").append(h1);
h1.classList.add("h1");


let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);