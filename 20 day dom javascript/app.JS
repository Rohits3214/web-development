
// let btns = document.querySelectorAll('button');
// for (btn of btns) {
//     btn.onclick = function() {
//         alert("button was clicked");
//     };
// } method 1

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("mouse entered");
//     }
//     console.dir(btn);

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("dblclick", sayName);

// } 
// function sayHello() {
//     alert("button was clicked");
// }// method 2
// function sayName() {
//     alert(" hello rohit");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
// let randomColor=generateRandomColor();  
// h3.innerText=randomColor;

// let div = document.querySelector("div");
// div.style.backgroundColor=randomColor;

// console.log("color updated");


// });
// function generateRandomColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let color=`rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// this is event listener method

let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button was clicked");
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button was clicked");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log(event.code);
//     console.log(event.key);
//     console.log("key was pressed");
// });
// p.addEventListener("click", changeColor);   
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); 

    // console.dir(form);

    // let user =this.elements[0];
    // let pass = this.elements[1];

    // console.log(user.value);
    // console.log(pass.value);

    // alert("form submitted");

    // let inp = document.querySelector("input");
    // console.log(inp.value);

    // let user = document.querySelector("#username");
    // console.log(user.value);
    // let pass = document.querySelector("#password");
    // console.log(pass.value);

//     alert(`hi ${user.value} your password is ${pass.value}`);
// }
});



// let user = document.querySelector("#username");

// user.addEventListener("change", function(){
//     console.log("input changed");
//     console.log("final value =",this.value);
// }
// );
// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value =",this.value);
// }
// );

let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText=inp.value;  
});