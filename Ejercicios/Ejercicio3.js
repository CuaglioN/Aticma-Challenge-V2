const array = []

let Mnum = prompt('Introduzca la cantidad de numeros al azar');

for (var x = 1; x <= Mnum; x++) {
    var random_number = Math.floor(Math.random() * 100);
    array.push(random_number)
}
document.getElementById('content').innerHTML = array;