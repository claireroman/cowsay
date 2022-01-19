const person = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hi, my name is ${person.name} and my campus is based in ${person.campus}.`,
    e : 'oO',
    T : 'U'
}));