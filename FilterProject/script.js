(async () => {
   let quotes = await getQuotes();
   let quote_no = 0;
   
   
   let previous = document.getElementById("pre");
   let next = document.getElementById("next");
   let input = document.getElementById("input");
   let span = document.getElementById("span");
   
   
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
   input.addEventListener("keyup",() =>{
       span.textContent = quotes[quote_no].split(" ").filter((words)=>{
           
         return words.match(new RegExp(""+input.value,"i"));

       });
   });
} )()






async function getQuotes() {
    const response = await fetch("quotes.txt");
    const data = await response.text();
    const table = data.split("~");
    return table;
}


