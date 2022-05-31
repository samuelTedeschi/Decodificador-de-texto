const codifica=document.querySelector("#codificar");
const decodificar=document.querySelector("#decodificar");
const caixaTexto=document.querySelector("#cxtexto");
const resultado=document.querySelector("#resultado");

codifica.addEventListener("click", function criptografar (){
    let texto= caixaTexto.value;
    let teste= texto.split("");
    for ( let i = 0 ; i < teste.length; i++){
        if (teste[i]==="a"){
            teste[i] = "ai"
        }else if (teste[i]==="e"){
            teste[i] = "enter"
        }else if(teste[i]==="i"){
            teste[i] = "imes"
        }else if(teste[i]==="o"){
            teste[i] = "ober"
        }else if(teste[i]==="u"){
            teste[i] = "ufat"
        }
    }
    let juntar = teste.join("");
    console.log(juntar);
    resultado.value = juntar
    caixaTexto.value = ""
});

decodificar.addEventListener("click", function descriptografar(){
    let texto = caixaTexto.value;
    let ai = /ai/gi;
    let enter =/enter/gi;
    let imes =/imes/gi;
    let ober =/ober/gi;
    let ufat = /ufat/gi;

    let result = texto.replace(ufat, "u").replace(ober, 'o').replace(ai, 'a').replace(imes, 'i').replace(enter, 'e');
  console.log(result);

resultado.value = result;
})