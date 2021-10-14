var contar = 0;
var cadena = "CaDena con MayUsCulAs";
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
        if (cadena[x] == mayusculas[i]) {
            contar = contar + 1;
        }
    }
}

console.log("Se encontraron: " + contar + " Mayusculas");
