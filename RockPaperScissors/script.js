let collection = document.getElementsByTagName("button");
let text = document.getElementById("text");
let game=["You win!","You lose!","Draw!"];
let buttons = [...collection];
buttons.forEach(element=>{
    element.addEventListener("click",()=>{
       text.textContent= game[Math.floor(Math.random()*3)];
    })
})


