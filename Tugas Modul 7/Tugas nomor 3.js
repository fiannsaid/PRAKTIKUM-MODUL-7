var nilai = {
    minMax: function() {
       console.log("Program ini dibuat oleh " + this.firstName + " " + this.lastName);

       
       var nilai = arguments

       console.log("Nilai tertinggi : " + Math.max.apply(Math, nilai));
       console.log("Nilai terendah : " + Math.min.apply(Math, nilai));
    }
}

var creator = {
   firstName: "Alfian",
   lastName: "Maulana"
}

var hasil = nilai.minMax.apply(creator, [5, 6, 2, 3, 7])