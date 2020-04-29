let hoursXpos = 200;
let hoursYpos = 200;
let radius = 100;
let rotation = 0;
for (let i = 1; i <= 12; i++) {
    let symbol = document.createElement("div");
    symbol.textContent = i;
    symbol.style.position = "fixed";
    symbol.style.transform = `translate(${hoursXpos + radius * Math.cos((i - 3) * Math.PI / 6)}px,${hoursYpos + radius * Math.sin((i - 3) * Math.PI / 6)}px)`;
    document.body.append(symbol);
}


let hourHand = document.createElement("div");
hourHand.style.height = "3px";
hourHand.style.width = `${radius * 0.5}px`;
hourHand.style.backgroundColor="#000000";
hourHand.style.transformOrigin="left";
hourHand.style.transform=`translate(${hoursXpos}px,${hoursYpos+8}px)`;
document.body.append(hourHand);

let minuteHand = document.createElement("div");
minuteHand.style.height = "2px";
minuteHand.style.width = `${radius * 0.8}px`;
minuteHand.style.backgroundColor="#000000";
minuteHand.style.transformOrigin="left";
minuteHand.style.transform=`translate(${hoursXpos}px,${hoursYpos+5}px)`;
document.body.append(minuteHand);

function tick(){
    minuteHand.style.transform=`translate(${hoursXpos}px,${hoursYpos+5}px) rotate(${rotation}deg )`;
    
    rotation+=1;
}
setInterval(tick,1000);
