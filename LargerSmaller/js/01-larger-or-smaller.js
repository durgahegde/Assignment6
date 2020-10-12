var integer1;
var integer2;
var largeInt;

integer1 = parseInt(window.prompt("Enter First Integer"));
integer2 = parseInt(window.prompt("Enter Second Integer"));

if(integer1 > integer2){
    largeInt = integer1;
    document.write("The larger integer between " + integer1 + " and " + integer2 + " is: "+ largeInt);
}

else if (integer1 < integer2){
    largeInt = integer2;
    document.write("The larger integer between " + integer1 + " and " + integer2 + " is: "+ largeInt);
}

else {
    document.write("Both the integers are equal");
}