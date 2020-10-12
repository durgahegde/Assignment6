for (number=1; number <= 100 ; number ++){
    if (((number % 3) ===0) && ((number %5) === 0)) {
        document.write("Marco! Polo!" + "<br>");
    }
    else if ((number % 3) === 0){
        document.write("Macro!" + "<br>");
    }
    else if ((number % 5)=== 0){
        document.write("Polo!" + "<br>");
    }
    else{
        document.write(number + "<br>");
    }
}