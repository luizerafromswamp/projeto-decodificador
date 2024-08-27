var textInput = document.querySelector("#textarea");
var textOutput = document.querySelector("#msg-empty");

function criptografar() {
    var texto = textInput.value;
    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('msg-empty').innerHTML = '  <div class="desc_text"> <p id="text">' + resultadoCripto + '</p> </div>' 

}

function descriptografar() {
    var texto = textInput.value;

    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('msg-empty').innerHTML = ' <div class="desc_text">   <p id="text">' + resultadoDescripto + '</p> </div>' 
}

