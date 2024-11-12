 // Função para adicionar ou remover a classe highlight ao clicar no summary
 function toggleHighlight(id) {
    var element = document.getElementById(id);
    element.classList.toggle("highlight");
}

// Adiciona um evento de clique para cada carta
document.getElementById('einstein').addEventListener('click', function () {
    toggleHighlight('einstein');
});
document.getElementById('newton').addEventListener('click', function () {
    toggleHighlight('newton');
});
document.getElementById('tesla').addEventListener('click', function () {
    toggleHighlight('tesla');
});
document.getElementById('cleopatra').addEventListener('click', function () {
    toggleHighlight('cleopatra');
});
document.getElementById('curie').addEventListener('click', function () {
    toggleHighlight('curie');
});
document.getElementById('daVinci').addEventListener('click', function () {
    toggleHighlight('daVinci');
});
document.getElementById('turing').addEventListener('click', function () {
    toggleHighlight('turing');
});
document.getElementById('suporteVida').addEventListener('click', function () {
    toggleHighlight('suporteVida');
});
document.getElementById('suporteProtecao').addEventListener('click', function () {
    toggleHighlight('suporteProtecao');
});
document.getElementById('suporteAtaque').addEventListener('click', function () {
    toggleHighlight('suporteAtaque');
});