var person = {
    fullName: function(birth, city) {
        return this.firstName + " " + this.lastName + "," + birth + "," + city;
    }
};
var person1 = {
    firstName: "Ajeng",
    lastName:"Fitria"
};

person.fullName.apply(person1, ["Desember","Cilacap"]);