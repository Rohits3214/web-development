let url="https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let link= await getDogImage();
    let img= document.querySelector("#result");
    img.setAttribute("src",link);
    console.log("link",link);
});
async function getDogImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch (e) {
        console.log("Error:", e);
        return "No image found";
    }
}