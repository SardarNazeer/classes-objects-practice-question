// Q) ek object ke method 2sre object me kese use karein?

const employeTax = {
    calcTax(){
        console.log("tax rate is 10%")
    },
}

const newEmploye = {
    employeName: "Ali Sher",
    Sallery: 40000,
}

newEmploye.__proto__ = employeTax;

// Classes 

class toyataCar {
    constructor(brand){
        console.log('creating new brand');
        this.brand = brand;
    }
    start(){
        console.log('start');
    }
    stop(){
        console.log('stop');
    }
}

let audi = new toyataCar("audi"); // constructor
let corola = new toyataCar(); // constructor undefined