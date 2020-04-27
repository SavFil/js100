const input = document.getElementById("input");
const p = document.getElementById("p");
let colorStrings = [];

class colorString {

    constructor(word) {
        this.word = word;

    }

    print() {

        let span = document.createElement("span");
        span.textContent = `${this.word} `;
        span.addEventListener("click",() => {
            span.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
        })
        p.appendChild(span);

    }
}


input.addEventListener("input", () => {
    colorStrings=[];
    p.innerHTML = "";

    input.value.split(" ").forEach(element => {
        colorStrings.push(new colorString(element));
    });
    console.log(colorStrings);
    colorStrings.forEach((element) => {
        element.print();
    });
    
    //let colorStr = new colorString(input.value);
    //colorStr.print();
});