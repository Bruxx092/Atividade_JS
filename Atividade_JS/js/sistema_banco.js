const titulo = document.getElementById('exibir'); 

let login = "abc"
let senha = 777
let resultado;

if (login == "abc" && senha == 123) {
    resultado = "Bem-vindo ao sistema"
} else {
    resultado= "Login ou senha inválidos"
}

titulo.innerHTML = resultado;