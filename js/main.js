

// //CHIEDO ALL'UTENTE IL SUO NOME E COGNOME
// const nomeCognome = document.getElementById("nome-cognome").value;
// console.log(nomeCognome)
// //CHIEDO ALL'UTENTE I KM CHE VUOLE PERCORRERE
// const distance = document.getElementById("distance").value;
// console.log(distance)
// //CHIEDO ALL'UTENTE LA SUA ETA'
// let age = document.getElementById("age-range").value;


// //CALCOLO IL PREZZO DEL BIGLIETTO INTERO (0.21 EURO AL KM)










let nomeCognome = document.getElementById("nome-cognome")

let age = document.getElementById("age-range").value;

const generateBtn = document.getElementById("btn");
generateBtn.addEventListener("click", function(){
    let distance = document.getElementById("distance")
    
})

let price = distance * 0.21;
console.log(price)



let message = "Prezzo del biglietto intero";

console.log(price)




if (age < 18) {
    
    price = price - (price * 0.2)
    message = "Prezzo tariffa minorenni";
    
} else if (age >= 65){
    price = price - (price * 0.4)
    message = "Prezzo tariffa over 65"
} 

console.log(`${price.toFixed(2)}€`);
console.log(message);

// document.getElementById("prezzo-biglietto").innerHTML=`${price.toFixed(2)}€`;