/*
 * Objects, interfaces, and API's
 */

let dog = {
    name: 'steve',
    color: 'brown',
    breed: 'Pug',
    size: 'Small',
    bark: function (){
        console.log('Bark!');
    },

};

dog.bark();

function x (y) {
    y.num = y.num + 5;
    console.log(y);
};

let y = {
    name: 'Tom',
    num: 10,
};

x(y);
console.log(y);