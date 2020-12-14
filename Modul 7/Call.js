var person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

var person1 = {
    firstName:"Ajeng",
    lastName:"Fitria"
}

var person2 = {
    firstName:"Bagus",
    lastName:"Bayu"
}

console.log("Menggunakan method call untuk menampilkan objek person 2 : ")

person.fullName.call(person2);