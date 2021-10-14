const var1 = [1, 2, 4, 6, 7, 8]
const var2 = [1, 2, 4, 5, 6, 7, 8]
// union = elementos ambos arrays



const union = var1.concat(var2)
union.sort(function (a, b) { return a - b });
const arrayclear = []
var y = 0;
for (var x = 0; x < union.length; x++) {
    if (arrayclear[y] != union[x]) {
        y++;
        arrayclear[y] = union[x];
    }
}
console.log(arrayclear);

// Tuve un inconveniente, ya que a la hora de mostrar el array final, se esta incluyendo "1 empty item" que no corresponde.
// Idependientemente de este error, la respuesta es la que yo esperaba.