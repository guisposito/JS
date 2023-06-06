const cidades = ["alto parana", "maringa", "cianorte"];

//Calculando e limitando comprador para uma passagem conforme a idade
const idadecomprador = 19;
const estaAcompanhada = false;
console.log("Destinos possíveis: " + cidades);

function removeArray(startNumber, indice, array){
    array.splice(startNumber, indice);
}

if (idadecomprador >= 18) {
  console.log("O comprador pode comprar a passagem");
  removeArray(2,1, cidades);
  console.log(cidades);
} else if (estaAcompanhada) {
  console.log("O comprador pode comprar a passagem");
  removeArray(2,1, cidades);
  console.log(cidades);
} else {
  console.log("O comprador não é maior de idade");
}
