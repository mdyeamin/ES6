const fish = { id: 68, name: 'king hilsha', price: 9000, phone: ' 01717555555', address: 'chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;


// console.log(phone, price);
// console.log(phone);
// console.log(phone, dress);
// console.log(phone);

const company = {
    name: 'GP',
    ceo: {
        id: 1, name: 'ajmol',
        food: 'fuska'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'HTML',
            secund: 'CSS',
            third: 'JS'
        }
    }
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);