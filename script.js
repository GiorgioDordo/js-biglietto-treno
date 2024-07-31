console.log('JS OK');

const resultElement = document.getElementById('result');
console.log(resultElement);

const pricePerKm = 0.21;

const howMuchKm = parseInt(prompt('Quanti chilometri vuoi percorrere?', 56));
const age = parseInt(prompt('Quanti anni hai?', 20));
console.log('howMuchKm', howMuchKm);
console.log('age', age);
const priceTicket = howMuchKm * 0.21;
if(isNaN(howMuchKm)  || isNaN(age)) {
    alert('Dati non inseriti correttamente');
} else {

    let finalPrice = priceTicket;
    if (age >= 18) {
        finalPrice = priceTicket;
        console.log('finalPrice', finalPrice);
        resultElement.innerHTML = `Il prezzo è: <strong>${finalPrice}€<strong>`;
    } else if (age < 18) {
        finalPrice = priceTicket * 0.8;
        console.log('finalPrice', finalPrice);
        resultElement.innerHTML = `Congratulazioni hai ricevuto uno sconto del 20%. Il prezzo è <strong>${finalPrice}€<strong>`;
    } else if (age >= 65) {
        finalPrice = priceTicket * 0.6;
        console.log('finalPrice', finalPrice);
        resultElement.innerHTML = `Congratulazioni hai ricevuto uno sconto del 40%. Il prezzo è <strong>${finalPrice}€<strong>`;
    }
}





