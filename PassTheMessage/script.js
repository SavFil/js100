const button = document.getElementById("btn");
const input = document.getElementById("input");
const message = document.getElementById("msg");

button.addEventListener("click", ()=>{
    if (input.value==="")
        alert("Message should contain some text!");
    else{
        message.textContent = input.value;
        input.value="";
    }
        
});





