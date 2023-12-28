// Objeto para representar uma questão em JavaScript
let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

// -----------------------------------------------------------------------------
// Função para exibir as questões
// -----------------------------------------------------------------------------
function showQuestion(q) {

    // 1. Seleciona o elemento para o título
    let titleDiv = document.getElementById('title');

    // 2. Altera o título
    titleDiv.textContent = q.title;

    // 3. Seleciona o elemento de todas as alternativas
    let alts = document.querySelectorAll('.alternative');

    // 4. Altera o valor de cada alternativa
    alts.forEach(function(element, index) {
        element.textContent = q.alternatives[index];
    });

}

// Exibe a questão e suas alternativas
showQuestion(question);
