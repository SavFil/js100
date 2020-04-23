class CircleGen {
    constructor() {
        this.circle = document.createElement("div");
        this.circle.style.height = "50px";
        this.circle.style.width = "50px";
        this.circle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.circle.style.borderRadius = "50%";
    }
    get() {
        return this.circle;
    }
}



let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let column = document.createElement("td");
        column.style.width="50px";
        column.style.height="50px";
        let circle = new CircleGen();
        column.appendChild(circle.get());
        column.addEventListener("mouseover",()=>{
            if (column.firstChild)
                column.removeChild(circle.get());
        })
        
        row.append(column);
    }
    table.append(row);
}
document.body.append(table);

