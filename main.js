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


// q1) you are creating a website for your college. Creating a class user with 2 properties, name & email. it also has a method called viewData() that allow user to view website data 

let data = "secret data information";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(data);
    }
}

let std1 = new user("sardar nazeer","sardar@gmail.com");
let std2 = new user("ali sher","ali@gmail.com");

let teacher1 = new user("dean","dean@gmail.com");

// q2) creating a new class admin which inherit from user. Add a new method called editData to Admin that allow it to edit website data

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "new value";
    }
}

let admin = new admin("admin","admin@gmail.com");