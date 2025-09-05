 let arr = [ 
    {
        name:"Rohit Singh",
        marks: 94,

    },
    {
        name:"Krish",
        marks: 100,

    },
    {
        name:"Hritik",
        marks: 90,

    },
];

arr.forEach((student) => {
    console.log(student.name);
});

let num =[5,440,215,55,21,5,2,4,52,62];

let double = num.map((el) => {
    return el * el ;
});

let even = num.filter((el) => el%2 == 0 ); 
let odd = num.filter((el) => el%2 != 0 ); 

let cgpa = arr.map((el) => {
    return el.marks / 10;
});

let nums = [1,2,3,4];
let finalValue = nums.reduce((res,el) => res+el);
console.log(finalValue);

// finding maximum element

let arr1 = [1,2,3,4,5,8,7,99,5,13,15,2,5,2];
let max = arr1.reduce ((max,el) => {
    if(max<el) {
        return el;
    }else {
        return max;
    }
});

//pq1

let arr2= [10,20,30,40,90,45];

let multiple = arr2.reduce ((multiple,el) =>{
        if (el % 10 == 0) {
            return true;
        }else {
            return false;
        }
});
//pq2
let min = arr1.reduce ((min,el) => {
    if(min<el) {
        return min ;
    }else {
        return el;
    }
});

//spread

console.log(...arr1);//it will print whole array

//spred with array literals

let newArr =[...arr1];
let chars =[..."hello"];
let  both =[...arr1,...chars];

//spread with object literals

const data ={
    email:"wljefnwjoefe",
    password:"abcgdsi"
};

const dataCopy = {...data,id:123};
let obj1 ={...arr1};

// Rest
function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us ",args[i]);
    }
}

//destructuring

let names= ["tony","bruce" ,"peter" ,"sdf","wrvrv","wwrvv"];

let [winner,runnerup,...others] = names;

//destructuring in objects 

const student = {
    name : "karan",
    age :14,
    class: 9,
    subjects:["hindi","english","maths","science"],
    username: "Karan@123",
    password: "abcd",
    city: "pune",
};
let { username: user , password: secret }= student;

//asq1

let arr3 =[5,42,5,45,2,52,1,52,4,5];
let square = arr3.map((el) => el*el);
let sum1 = arr3.reduce((res,el) => res+el);
let average = sum1 / arr3.length;

//asq2
let numbers =[1,2,3,4,64,49,651];
console.log(numbers.map((el) => el+5));

//asq3

