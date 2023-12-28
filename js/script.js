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
        // Altera o texto da alternativa
        element.textContent = q.alternatives[index];
        
        // Listener para capturar o clique em cada alternativa
        element.addEventListener('click', function() {
            // Verifica se a alternativa está correta
            if(q.correctAnswer == index) {
                console.log("Correct Answer!");
            }
            else {
                console.log("Wrong Answer!");
            }
        })
    });

}

// Exibe a questão e suas alternativas
showQuestion(question);

// Seleciona o botão
let btn = document.getElementById('btn');

// Listener para o botão: click
btn.addEventListener('click', function() {
    console.log('Clicked!');
});
