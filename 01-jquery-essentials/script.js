// Forma padrão de inicializar
$(document).ready(function () {
    $(".jquery_essentials").html("Jquery Essentials Inicializado!")
});

// Forma padrão simplificada
$(function () {
    $(".jquery_essentials").html("Jquery Essentials Inicializado com Gatilho!")
})

// Carregando antes de outra biblioteca
jQuery(function () {
    $(".jquery_essentials").html("Jquery Essentials Inicializado ANTES de outra lib!")
});

// Carregando depois de outra biblioteca
var $j = jQuery.noConflict();

$j(document).ready(function () {
    $j(".jquery_essentials").html("Jquery Essentials Inicializado DEPOIS de outra lib!")
});