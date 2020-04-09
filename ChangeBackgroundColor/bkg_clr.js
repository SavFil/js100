const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    document.bgColor = `rgb(${R}, ${G}, ${B})`;

});

