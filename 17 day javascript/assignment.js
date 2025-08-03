//1st
let arr =[1,5,4,8,2,1,8,2,5,4,2,5,1,55,41,45,5]
let num =2;

function getelements(arr,num){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
} 
getelements(arr,num);

// 2nd
let str ="abcdabcdefgggh";

function alphabet(str) {
    let ans="";
    for(let i=0; i< str.length; i++){
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1 ){
            ans += currChar;
    }
}
return ans;
}
alphabet(str);
//3rd

let country =["Australia","Germany","Unted States of America"];


function bigCountry(country) {
    let ansIdx =0;
    for(let i=0 ;i < country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }        
        }
        return country[ansIdx];   
}
bigCountry(country);

//4th
let str1="apnacollege";

function countVowels(str1){
    let count=0;
    for(let i=0; i<str1.length ;i++){
        if(
        str.charAt(i)=="a"||
        str.charAt(i)=="e"||
        str.charAt(i)=="i"||
        str.charAt(i)=="o"||
        str.charAt(i)=="u")
        {
            count++;
        }
    }
    return count;
}

