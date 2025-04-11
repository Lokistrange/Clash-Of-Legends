 // Função para adicionar ou remover a classe highlight ao clicar no summary
 function toggleHighlight(id) {
    var element = document.getElementById(id);
    element.classList.toggle("highlight");
}

// Adiciona um evento de clique para cada carta
document.getElementById('objetivo').addEventListener('click', function () {
    toggleHighlight('objetivo');
});
document.getElementById('configuracao').addEventListener('click', function () {
    toggleHighlight('configuracao');
});
document.getElementById('campo').addEventListener('click', function () {
    toggleHighlight('campo');
});
document.getElementById('tiposCartas').addEventListener('click', function () {
    toggleHighlight('tiposCartas');
});
document.getElementById('pontosVida').addEventListener('click', function () {
    toggleHighlight('pontosVida');
});
document.getElementById('turno').addEventListener('click', function () {
    toggleHighlight('turno');
});
document.getElementById('invocacao').addEventListener('click', function () {
    toggleHighlight('invocacao');
});
document.getElementById('ativacaoSuporte').addEventListener('click', function () {
    toggleHighlight('ativacaoSuporte');
});