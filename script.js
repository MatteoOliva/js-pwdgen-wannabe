// chiedo nome
let nome  = prompt("Digita il tuo nome");
console.log(nome);

// chiedo il cognome
let cognome = prompt("Digita il tuo cognome");
console.log(cognome);

// chiedo il colore preferito
let colore = prompt("Digita il tuo colore preferito");
console.log(colore);

// stampa pw

let numero = "23";
let userPassword = `${nome}${cognome}${colore}${numero}`;
document.getElementById("pw-gen").innerHTML = `La password assegnata è ${userPassword}`;
console.log(userPassword);

