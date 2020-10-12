var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    window.console.log("The coin flip is: " + coinFlip);
    if (coinFlip == 0){
        coinFlip = "Heads"
        window.console.log("The coin flip is: " + coinFlip);
    }
    else {
        coinFlip = "Tails"
        window.console.log("The coin flip is: " + coinFlip);
    }
    document.write(coinFlip +"<br>");

}while (coinFlip === "Heads");