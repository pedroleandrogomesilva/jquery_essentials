// Forma padrão simplificada

var jqueryessentials = "Olá, Mundo! #BoraProgramar!"
alert(jqueryessentials);
$(function () {
    $(".jquery_essentials").html("Jquery Essentials Inicializado!")
})

console.group("Mensagens gerais");

console.log("jQuery Essentials!");
console.info("jQuery foi inicializado com sucesso!");
console.warn("Um alerta!");
console.error("Um erro!");

console.groupEnd();

var cadastro = false;

console.group("Cadastro de clientes");

if(cadastro === true){
    console.info("Cadastro iniciado!");
}else{
    console.warn("Erro ao cadastrar!")
}

// console.assert(cadastro === true, "Cadastro não realizado!");
// console.log("Cadastro realizado");

console.groupEnd();