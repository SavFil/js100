(async () => {
   let quotes = await getQuotes();
   let quote_no = 0;
   
   previous = document.getElementById("pre");
   next = document.getElementById("next");
   
   
   previous.addEventListener("click", () => {
       if (quote_no == 0)
           quote_no = quotes.length - 1;
       else
           quote_no -= 1;
       document.getElementById("quote").textContent = `${quotes[quote_no]}`;
        
   });
   next.addEventListener("click", () => {
       if (quote_no == quotes.length - 1)
           quote_no = 0;
       else
           quote_no += 1;
       document.getElementById("quote").textContent = `${quotes[quote_no]}`;

   });
} )()




async function getQuotes() {
    const response = await fetch("quotes.txt");
    const data = await response.text();
    const table = data.split("~");
    return table;
}


