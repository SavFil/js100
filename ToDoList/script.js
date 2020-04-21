const addBtn = document.getElementById("add");
const text = document.getElementById("text");
const list = new Array();
const items = document.getElementById("items");

addBtn.addEventListener("click", () => {
    list.push(text.value);
    text.value = "";
    const p = document.createElement("p");
    p.setAttribute("id", `p${list.length - 1}`)
    const done = document.createElement("input");
    done.setAttribute("type", "checkbox");
    done.addEventListener("click", () => {
        if (p.style.textDecoration.match("line-through"))
            p.style.textDecoration = "none";
        else
            p.style.textDecoration = "line-through";
    })
    p.textContent = `${list.length}: ${list[list.length - 1]}`;

    p.append(done);
    items.append(p);
});


