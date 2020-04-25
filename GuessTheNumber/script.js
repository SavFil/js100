const randomNumber = Math.floor(Math.random() * 101);
const input = document.getElementById("number");
let div = document.createElement("div");
let tries = 0;

document.getElementById("btn").addEventListener("click", () => {
    let number = parseInt(input.value);
    if (number === randomNumber){
        div.textContent=`You got it in ${tries} tries!`;
        
    }
    else if (number < randomNumber){
        div.textContent = "Too low!";
        tries+=1;
    }
    else{
        div.textContent = "Too high!";
        tries+=1;
    }
    document.body.append(div);
});



