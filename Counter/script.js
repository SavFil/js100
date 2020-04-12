const subBtn = document.getElementById("sub");
const addBtn = document.getElementById("add");
const msg = document.getElementById("msg");

subBtn.addEventListener("click", ()=>{
    const num = parseInt(msg.textContent,10) - 1;
    msg.textContent = num;
});

addBtn.addEventListener("click", ()=>{
    const num = parseInt(msg.textContent,10) + 1;
    msg.textContent = num;
        
});





