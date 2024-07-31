console.log('JS OK');

const resultElement = document.getElementById('result');
console.log(resultElement);

const pricePerKm = 0.21;

const howMuchKm = parseInt(prompt('Quanti chilometri vuoi percorrere?', 56));
const age = parseInt(prompt('Quanti anni hai?', 20));
console.log('howMuchKm', howMuchKm);
console.log('age', age);

let priceTicket = howMuchKm * pricePerKm;
console.log('priceTicket', priceTicket);