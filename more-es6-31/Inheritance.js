class teamMember {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}



class Support extends teamMember {

    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare {
    name;
    designation = 'student care wev dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name,
            this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'build a routine for ', student);

    }
}


class neptuneDev {
    name;
    designation = 'student care wev dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name,
            this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);

    }
}

const aamir = new Support('Aamir khan', 'dubai');
const salman = new Support('Solaiman khan', 'singapur');

const alia = new StudentCare('alia batth', 'mumbai');
console.log(alia);