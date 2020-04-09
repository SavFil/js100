const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    const hexclr = Math.floor(Math.random()*16777215).toString(16)
    document.getElementsByTagName("h1").item(0).textContent=`HEX COLOR :0x${hexclr.toLocaleUpperCase()}`;
    document.bgColor=`#${hexclr}`;
})