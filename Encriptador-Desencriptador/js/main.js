/* Display de los elementos*/
document.getElementById("bloqueIzquierdo").style.display = "flex";
document.getElementById("botones").style.display = "flex";
document.getElementById("textArea").style.display = "flex";
document.getElementById("botonCopiado").style.display = "flex";

/*Variables*/

var input = document.querySelector("input");
var btnEncriptar = document.getElementById("encriptar");
var btnDesencriptar = document.getElementById("desencriptar");
var textArea = document.getElementById("texto");


/*Funciones*/

/*Funcion Encriptar*/
function encriptar(){
    
    document.getElementById("texto").innerHTML = input.value;

    

    var inputUsuario = "";
    var inputUsuario = input.value;

    if (inputUsuario != "") {
        inputUsuario = inputUsuario.replace(/e/g, "enter"),
        inputUsuario = inputUsuario.replace(/i/g, "imes"),
        inputUsuario = inputUsuario.replace(/a/g, "ai"),
        inputUsuario = inputUsuario.replace(/o/g, "ober"),
        inputUsuario = inputUsuario.replace(/u/g, "ufat");
        document.getElementById("texto").innerHTML = inputUsuario;
        document.getElementById("encriptar").value = ""
        
    }else{
        console.log("Escibi algo")
    }
  
       
    
}






/*Funcion Desencriptar*/
function desencriptar(){
    document.getElementById("texto").innerHTML = input.value;

    

    var inputUsuarioD = "";
    var inputUsuarioD = input.value;

    if (inputUsuarioD != "") {
        inputUsuarioD = inputUsuarioD.replace(/enter/g, "e"),
        inputUsuarioD = inputUsuarioD.replace(/imes/g, "i"),
        inputUsuarioD = inputUsuarioD.replace(/ai/g, "a"),
        inputUsuarioD = inputUsuarioD.replace(/ober/g, "o"),
        inputUsuarioD = inputUsuarioD.replace(/ufat/g, "u");
        document.getElementById("texto").innerHTML = inputUsuarioD;
        document.getElementById("desencriptar").value = ""
        
    }else{
        console.log("Escibi algo")
    }




}

/*Funcion Copiado*/

function copyToClickBoard(){
    var copiar = document.getElementById('texto').innerHTML;

    navigator.clipboard.writeText(copiar)       
}









