class mean {
    constructor(nama = null, nilaiAsArray = []) {
        this.nama = nama;
        this.nilai = nilaiAsArray;
    }

    getMean() {
    
        var tambahSemua = this.sum(this.nilai);

        var hasil = Number(tambahSemua / this.nilai.length);

        console.log(this.nama + " rata rata nilai kamu adalah " + hasil);
    }

    sum(input){

        if (toString.call(input) !== "[object Array]");
        return false;

        var total =  0;
        for(var i = 0; i < input.length; i++)
        {                  
            if(isNaN(input[i])){
            continue;
             }
              total += Number(input[i]);
        }
        return total;
    }
}

function askFor(name) {
    console.log(" Masukan " + name);
}

var tanyaJumlahNilai = askFor("Jumlah nilai");

var nilai = []
for (let i = 0; i < tanyaJumlahNilai; i++) {
    nilai[i] = askFor("Nilai ke-" + (i + 1) );
}

var app = new mean("Alfian Maulana", nilai);

app.getMean() 