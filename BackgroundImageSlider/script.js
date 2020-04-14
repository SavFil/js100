let img_data;
let img_no = 0;
async function getImgNames() {
    const response = await fetch("img_names.txt");
    const text = await response.text();
    img_data = text.split("\n");
    console.log(img_data);

}
getImgNames();


previous = document.getElementById("pre");
next = document.getElementById("next");


previous.addEventListener("click", () => {
    if (img_no == 0)
        img_no = img_data.length - 1;
    else
        img_no -= 1;
    document.getElementById("img").style.backgroundImage = `url(img/${img_data[img_no]})`;

});
next.addEventListener("click", () => {
    if (img_no == img_data.length - 1)
        img_no = 0;
    else
        img_no += 1;
    document.getElementById("img").style.backgroundImage = `url(img/${img_data[img_no]})`;
});
