// // js function call stack
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();

// }

// function three() {
//     let ans = two() + one();
//     return ans;
// }

// console.log(three());


let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click" , async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getUniversity(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (let col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getUniversity(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }catch (e) {
        console.log("Error:", e);
        return [];
    }
    }