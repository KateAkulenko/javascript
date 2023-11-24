// let _name = "";
// let second_name = "";
// let $name = "";
// let secondName = "";

let $name = prompt('Як вас звати');
console.log(`Привіт ${$name}`);

let age = prompt('вкажіть рік вашого народження');
const year = 2023;
console.log(`Ваш вік ${year-age}`);

let sideofasquare = prompt ('вкажіть сторону квадрату в сантиметрах');
console.log(`Периметр ${sideofasquare*4} см`);

let radius = prompt ('вкажіть радіус кола у сантиметрах');
const pi = 3.14;
console.log(`Площа кола ${pi*(radius*radius)}`);

let distance = prompt ('Вкажіть відстань між містами в кілометрах');
let time = prompt ('Вкажіть час за який ви хочете доїхати в годинах');
console.log(`Необхідна швидкість ${distance/time} км/год`);

let dollar = prompt ('Скільки Долярів маш на кармані?');
const kurs = 0.92;
console.log(`${dollar*kurs} Євро`);

