const multiLine = 'this is my frist line this is my secund line this my third line thin is my fourth line';

const newMultiLine = `
this is my first line
this is my secund line
this is my third line
this is my fourth line
`

const friend = ['abul', 'babul', 'kabul', 'sabul']
const count = 5;
const old = "<h3 class='friend-name'>friend-" + count + "</h3>"
const old2 = `<h3 class='friend-name'>friend-${friend.length}</h3>`
console.log(old2);

const first = 'mamun'
const last = 'chowdhory';
const fullOld = first + ' ' + last;
const fullNew = `${first} ${last}`;
