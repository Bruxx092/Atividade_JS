const titulo = document.getElementById('exibir'); 

let nota = 3
let faltas = 9
let resultado;


if (nota >=7 && faltas <=20){
    resultado = "aprovado";
}
else if (nota <=7 && faltas >=20){
    resultado = "reprovado";
       
} 
titulo.innerHTML = resultado;