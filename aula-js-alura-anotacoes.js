//Array
const cidades = ["alto parana", "maringa", "cianorte"];
const carros = new Array("Chev", "VW", "Fiat");

console.log(cidades);
console.log(carros);

//Adiciona um elemento ao fim do Array
cidades.push("bahia", "São Paulo");

//Remove um elemento do array conforme a o indice
//Aqui remove o cianorte
cidades.splice(2,1);

//Remove o último item do array
//Aqui remove Sao paulo
console.log(cidades);
cidades.pop();

//Remove o inici do array


//Consulta o primeiro item do array
console.log(carros[0]);

//Traz o último elemento do array
var ultimo = carros[carros.length -1];
console.log(ultimo);

//Sabendo o index do array
carros.forEach(function(item,indice){
    console.log(item, indice);
})

//Adicionando no inicio do array
const adicionar = cidades.unshift("Paranavai");

//Sabendo o index do item
console.log(cidades.indexOf('maringa'));

//Copia o array por completo
let copia_carros = carros.slice();

console.log(cidades);

//Calculando e limitando comprador para uma passagem conforme a idade
const idadecomprador = 21;
console.log("Destinos possíveis: " + cidades);

if(idadecomprador >= 18 ){
    console.log("O comprador pode comprar a passagem");
}else {
    console.log("O comprador não é maior de idade");
}
