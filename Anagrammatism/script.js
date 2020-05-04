const input = document.getElementById("input");
const p = document.getElementById("p");
let word = [];


input.addEventListener("input", element => {
    let type = element.inputType;
    if (type.match("deleteContentBackward"))
        word.splice(input.value.length, 1);
    else
        word.push(input.value.charAt(input.value.length - 1));

       
    console.log(perm(word).join("\n"));
});

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }