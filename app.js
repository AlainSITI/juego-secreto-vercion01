/*variables*/
let numeroMaximoPosible = 10;
// let numeroSecreto = Math.floor(Math.random()*100) +1;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) +1;
let numeroDeUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximoIntentos = 3;
/*Bucle apartir del while*/
while(numeroDeUsuario != numeroSecreto) {
     numeroDeUsuario = parseInt (prompt (`Me indicas un numero de 1 y ${numeroMaximoPosible} por favor`));

    console.log (typeof(numeroDeUsuario));
    console.log (numeroSecreto);

    if (numeroDeUsuario == numeroSecreto) {
        alert (`!FELICIDADEZ¡ Acertaste, el número es: ${numeroDeUsuario} lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else{
        if(numeroDeUsuario > numeroSecreto){
            alert ("El numero secreto es menor");
        } else{
            alert("El numero secreto es mayor");
        }
    }/*incrementador cuando no se acierte CONTADOR intentos mas mas intentos ++  */
    intentos ++ ;
    // palabraVeces = "veces";
    if (intentos > maximoIntentos) {
        alert(`llegaste al número maximo de ${maximoIntentos} intentos`);
        break;
    }
}    