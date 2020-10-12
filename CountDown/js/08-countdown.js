var number;

number = parseInt(window.prompt("Please Enter a Number for Count Down"));

while(number >= 0){
    document.write(number + "<br>")
    number -- ;
}