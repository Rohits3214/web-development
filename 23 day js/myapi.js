let url ="https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log("data1",data.fact);
    return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data2) => {
    console.log("data2",data2.fact);
})
.catch((error) => {
    console.log("Error:", error);
});


// using axios
let btn = document.querySelector("button");


btn.addEventListener("click", async () => {
    let fact = await getFActs();
    console.log("fact", fact);
    let p = document.getElementById("result");
    p.innerText = fact;
});
async function getFActs(){
    try{
        let response = await axios.get(url);
        return response.data.fact;
    }catch(e){
        console.log("Error:", e);
        return "NO fact found";
    }
}