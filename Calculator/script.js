let buttonsCollection = document.getElementsByTagName("td");
let textArea = document.getElementById("textarea");
let buttons = [...buttonsCollection];
let num1, num2, num3;
let func;
let math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }
};
const numberMap = {
    "0": function () { return 0 },
    "1": function () { return 1 },
    "2": function () { return 2 },
    "3": function () { return 3 },
    "4": function () { return 4 },
    "5": function () { return 5 },
    "6": function () { return 6 },
    "7": function () { return 7 },
    "8": function () { return 8 },
    "9": function () { return 9 }
}

const operationMap = {
    "+": function () { return "+"},
    "-": function () { return "-"},
    "*": function () { return "*"},
    "/": function () { return "/"}
}

const utilityMap = {
    "=": function() {
        num2 = textArea.value;
        textArea.value = math_it_up[func](parseInt(num1),parseInt(num2));
    }
}



buttons.forEach((element) => {
    element.addEventListener("click", () => {
        let temp = numberMap[element.textContent];
        textArea.value += temp ? temp() : "";
        temp = operationMap[element.textContent]
        if (temp){
            func = temp();
            num1 = textArea.value;
            textArea.value="";
        }
        temp = utilityMap[element.textContent];
        if (temp)
            temp();
        
            
    })
})