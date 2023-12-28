// Objeto para representar uma questão em JavaScript
let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

// -----------------------------------------------------------------------------
// Função para inicializar a aplicação
// -----------------------------------------------------------------------------
function start() {
    // Obtém o elemento de todas as alternativas
    let alts = document.querySelectorAll('.alternative');

    // Percorre cada alternativa
    alts.forEach(function(element, index) {
        // Listener para capturar o clique
        element.addEventListener('click', function() {
            // Verifica se a alternativa está correta
            console.log("Check Correct Answer");
        })
    });

    // Exibe a primeira questão
    showQuestion(question);
}

// -----------------------------------------------------------------------------
// Função para exibir as questões
// -----------------------------------------------------------------------------
function showQuestion(q) {
    // Seleciona o elemento para o título
    let titleDiv = document.getElementById('title');

    // Altera o título
    titleDiv.textContent = q.title;

    // Obtém o elemento de todas as alternativas
    let alts = document.querySelectorAll('.alternative');

    // Percorre cada alternativa
    alts.forEach(function(element, index) {
        // Exibe o texto de cada alternativa
        element.textContent = q.alternatives[index];
    });
}

// Inicializa a aplicação
start();
