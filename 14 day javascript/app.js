let msg="    hello    ";
//  let password= prompt("set your passsword" );
//  let newpass =password.trim();
//   console.log(newpass)
// let newmsg= msg.toUpperCase();
// console.log(newmsg);
// let newMsg = msg.trim();
// console.log(newMsg);
let neewMsg = msg.trim().toUpperCase();
console.log(neewMsg);
let newmsg1= "IloveCoding" ;
  let newMsg2= newmsg1.slice(1,8);
console.log(newMsg2);
let newMsg3= "help!";
let newMsg4= newMsg3.trim().toUpperCase();
console.log(newMsg4);
let name="ApnaCollege";
let newName=name.slice(4).replace("l","t");
console.log(newName);

// array
let students = ["Amit", "Ravi", "Sita", "Gita"];
let nums = [1, 2, 3, 4, 5];
let info = ["amit",23,6.1, true];
let followers = ["Amit", "Ravi", "Sita", "Gita"];
let all = students.concat(nums, info, followers);
let languages= ["c", "c++","html", "javascript", "python", "java","c#","sql"];
let array = [7,9,0,-2]
let n =3;
let newArray = array.slice(0,n);
console.log(newArray);
let newArray1= array.slice(array.length-n);
console.log(newArray1);
// let array2 = prompt("enter the array elements");
// if (array2.length > 0) {
//   console.log(array2);
  
// }else {
//   console.log("array is empty");
// }
let str3 = "Rohit Singh"
let idx = 0;
  if (str3[idx] == str3[idx].toLowerCase()) {
    console.log("The character is lowercase");
    
  }else {
    console.log("The character is not lowercase");
  }
let str=prompt("please enter a string");
console.log(`original string =${str}`);
console.log(`string withouts paces =${str.trim()}`);