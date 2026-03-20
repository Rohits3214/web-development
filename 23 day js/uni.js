let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click" , async () => {
    let country = "India";
    let state = document.querySelector("input").value;
    console.log(state);

    let colArr = await getUniversity(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (let col of colArr) {
        console.log(col);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getUniversity(state) {
    try {
        let res = await axios.get(url+country+ state-province);
        return res;
    }catch (e) {
        console.log("Error:", e);
        return [];
    }
    }