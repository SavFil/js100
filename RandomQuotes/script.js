async function getQuote() {
    const response = await fetch("quotes.txt");
    const data = await response.text();
    const table = data.split("~");
    return table[Math.floor(Math.random() * table.length)].split("@");
}

document.getElementById("btn").addEventListener("click",async ()=>{
    const text = await getQuote();
    const quote = text[0];
    const author = text[1];
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = `-${author}`;
});





