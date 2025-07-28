console.log("hello world!")
let a= 10;
let b=5;
console.log("sum is :",a+b);
let pencilPrice = 10;
let eraserPrice =5;
// let output="the total price is :"+(pencilPrice + eraserPrice)+"Rupees.";
let output =`the total price is : ${pencilPrice + eraserPrice} Rupees.`;
console.log(output);
let age=25;
if (age>=18) {
    console.log("you are eligible for driving license");
}
else {
    console.log ("not eligible for driving license")
}
let colour = "green";

if (colour=="red") {
    console.log("stop")
    
}
 else if (colour=="yellow") {
    console.log("ready")
} 
else if (colour=="green") {
    console.log("go")
}
let marks =75;
if (marks >= 33 || marks >= 80) {
    console.log("pass");    
    console.log("A+");    
}
let str = "apples";
if ( (str[0] == "a" || str[0] =="A" ) && (str.length > 5)) 
    {
    console.log("it is a good string");
    
} else {
    console.log("not a good string");
}
let num =12;
if (((num%3 === 0 ) && (num+1 == 15) || (num-1 == 11) ) ) {
    console.log("safe");
    
}else {
    console.log("unsafe");
}
let color ="yellow";
switch (color) {
    case "red":
        console.log("stop")
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("GO");
    default:
        console.log("broken light");
        break;
}
let day = 4;
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;

    default:
        console.log("holiday")
        break;
}
alert("something is wrong!");
console.log("hello");
console.error("this is an error message");
console.warn("this is a warning message");
let firstName = prompt("enter your name:");
console.log(firstName);
let userName= prompt("user's name :");
let years =prompt("enter your age");
console.log(userName + " is " + " "+years +" "+" years old");