const student = {
  name :"rohit singh", 
  age : 23,
  marks: 84.4,
  city:"jabalpur" ,
};

const post = {
 username : "Rohit Singh",
 content: "about my currier",
 likes:150,
 reposts:50,
 tags: ["@apnacollege","@delta"]
};


const obj= {
    1 :"a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
};
// add and update and delete in object
student.city ="mumbai";
student.gender="male";
delete student.marks;

// nested object
// object of object
const classInfo = {
    aman : {
        subject:"english",
        marks :100, 
    },
    rohit : {
        subject:"maths",
        marks:50,
    },
    shraddha : {
        subject:"hindi",
        marks:100
    } 
};
// array of object
const classInfo2 = [
     {
        subject:"english",
        marks :100, 
    },
     {
        subject:"maths",
        marks:50,
    },
     {
        subject:"hindi",
        marks:100
    } 
];

// let num= Math.random();
// num= num*10;
// num = Math.floor;
// num=num+1;
// console.log(num);

//guessing game

 const max=  prompt ("enter the maximum number");

 const random = Math.floor(Math.random()*max)+1;

 let guess = prompt("guess the number");

 while (true) {
 if (guess == "quit") {
    console.log("quitting");
    break;    
 }
 if (guess == random) {
    console.log("yeah! you did it.");
    break;
 }else if (guess < random) {
    guess = prompt ("your guess wass too small")
 }
 
 
 else  {
    guess= prompt("your guess was too large");
 }
}


