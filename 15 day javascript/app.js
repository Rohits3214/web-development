// f

let arr= [1, 2, 3, 4, 5, 6, 2, 3];
let num =2;
for (let i=0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
 console.log(arr);

let num2=287152;
// let count =0;
let copy= num2;
// while (copy > 0) {
//     copy = Math.floor(copy / 10);
//     count++;
// }
// console.log(count);

let sum=0;
while (copy >0) {
    let digit = copy % 10;
    sum = sum+digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

let n = 5;
let factorial =1;
for (let i=1; i <=n; i++){
   factorial *=i;
}
console.log(factorial);

let arr3 = [2,5,10,4,2,7,1,9];
let largest = 0;
for ( let i=0; i <arr3.length; i++){
    if(largest < arr3[i]) {
        largest = arr3[i];
    }
}
console.log(largest);