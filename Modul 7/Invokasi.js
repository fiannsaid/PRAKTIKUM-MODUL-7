function myFunction(a, b, c){
    console.log("Hello, my name is", a);
    console.log("I'm ", b, " years old");
    console.log("I like ", c);
}

console.log("\nOutput contoh 1")

myFunction("Ajeng Fitria", 19, "Singing");

function myFunction(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

var x = new myFunction("Bagus", "Bayu");

console.log("\nOutput contoh 2")

x.firstName;