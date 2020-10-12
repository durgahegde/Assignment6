var coinFlip;
var choice;

coinFlip = Math.floor(Math.random()*10);
choice = window.prompt("Please Select Heads or Tails").toLowerCase();

window.console.log("The coin flip is: " +coinFlip)

if((coinFlip < 5) === true){
    coinFlip = "heads"
}
else{
    coinFlip = "tails;"
}

window.console.log("The coin flip is: " +coinFlip);
window.console.log("The choice is: " +choice);

if((coinFlip === "heads" && choice === "heads") === true){
    window.alert("The flip was heads and you chose heads...you win!");
} else if ((coinFlip === "heads" && choice === "tails") === true) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if ((coinFlip === "tails" && choice === "heads") === true) {
    window.alert("The flip was tails but you chose heads...you lose!");
} 
else{
    window.alert("The flip was tails and you chose tails...you win!");
}