function details() {
    console.log("name:Rohit singh");
    console.log("age:21");
    console.log("city:jabalpur");
}

details();

function dice() {
console.log(Math.floor(Math.random()*6)+1);
}
dice();
dice();
dice();
dice();
dice();
dice();
dice();

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`)
}
printInfo("rohit",21);
printInfo("hritik",21);


function average (a,b,c){
    console.log((a+b+c)/2);
}
average(5,5,5);
average(65151,5165,51653);

function table(n) {
    for (let i = n; i <=n*10; i+=n) {
        console.log(i);
    }
}
table(2);
table(20);
table(17);
function sum(a,b){
    return a+b;
    console.log("hello"); // this will not print
}
console.log(sum(45,45));

function sumofN(n){
    let sum=0;
    for (let i = 0; i <=n; i++) {
        sum=sum+i;
        
 }
return sum;
}
console.log(sumofN(10));

 let greet = "hello";
 function changeGreet() {
    let greet ="namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
    innerGreet();
 }

 console.log(greet);
 changeGreet();

 let sum1 = function(a,b){
    return a+b;

 }

let odd= function(n) {
    console.log(!(n%2 == 0));
 
}
let even= function(n) {
    console.log(n%2 == 0);
 
}

function oddOrEvenFactory(request){
    if (request =="odd") {
       return function(n) {
        console.log(!(n%2 == 0));
 
}
    }else if(request == "even"){
        return function(n) {
    console.log(n%2 == 0);
 
}
    }else {
        console.log("wrong request");
    }
}

let request ="even";

//this function

let marks = {
    name:"shraddha",
    maths : 45,
    english :90,
    science :92,
    Hindi :42,
    getAvg() {
        console.log(this);
        let avg = (this.english + this.maths +this.Hindi) /3;
        console.log(`${this.name} got average marks=${avg}`)
    }
}
const pow =(a,b) => {
    return a**b;
};

const mul =(a,b) => a*b;


//set timeout function

console.log("hello");

setTimeout( ()=> {
    console.log("Apna COllege")
},4000);

console.log("welcome to");

// SetInterval

console.log("hello");

 let id=setInterval( ()=> {
    console.log("Apna COllege")
},1000);

console.log("welcome to");
console.log(id);
clearInterval(id);

const square =(n) => (n*n);

let id1=setInterval(()=> {
        console.log("hello World");
},2000);

setTimeout(() =>{
    clearInterval(id1);
},10000);

//pq1

let arrayAverage =(a,b,c,d,e) => (a+b+c+d+e)/5;

//pq2

let even1 =(n) => {
    if (n%2 ==0) {
        console.log("it is even")
    }else{
        console.log("it is odd");
    }
};
