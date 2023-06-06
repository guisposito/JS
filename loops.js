const cidades = ["alto parana", "Paranavai" ,"maringa", "cianorte"];

//Calculando e limitando comprador para uma passagem conforme a idade
const idadecomprador = 16;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Paranavai";
console.log("Destinos possíveis: " + cidades);

function removeArray(startNumber, indice, array){
    array.splice(startNumber, indice);
}

//Comparando o array
const podeComprar = idadecomprador >= 18 || estaAcompanhada == true ;
let contador = 0;
let destinoExiste = false;

//Loop while
while(contador < 4){
    if (cidades[contador] == destino) {
        console.log("Destino existente: " + cidades[contador])
        destinoExiste = true;
        break;
    }
    contador++;
}

//Loop com o for
for (let cont = 0; cont < 4; cont++) {
    if (cidades[cont] == destino) {
        console.log("Destino existente: " + cidades[cont])
        destinoExiste = true;
        break;
    }
}