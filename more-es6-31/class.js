class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir khan', 'dubai');
const salman = new Support('Solaiman khan', 'singapur');
aamir.startSession()
salman.startSession()
// console.log(aamir);
// console.log(salman);