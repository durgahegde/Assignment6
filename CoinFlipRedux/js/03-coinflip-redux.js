var coinFlip;

for(i=1 ; i <=10 ; i++){
    coinFlip = Math.round(Math.random());
}

window.console.log("The coin flip is: " + coinFlip);

if (coinFlip == 0){
    document.write("Heads");
}
else {
    document.write("Tails");
}