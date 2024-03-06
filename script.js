// Usando loop for
console.log("Usando loop for:");

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        console.log("O número " + i + " é par.");
    } else {
        console.log("O número " + i + " é ímpar.");
    }
}

// Usando loop while
console.log("\nUsando loop while:");

let contador = 0;

while (contador < 5) {
    if (contador === 3) {
        console.log("O contador é igual a 3.");
    } else {
        console.log("O contador é " + contador + ".");
    }
    contador++;
}