var module;

for(number=0; number <= 15 ; number ++){
    module = number % 2;
    if(module === 0){
        document.write("\"" + number + " is even \" " + "<br>");
    }
    else{
        document.write("\"" + number + " is odd \" " + "<br>");
    }
}