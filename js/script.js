// -----------------------------------------------------------------------------
// Objeto para representar as questões
// -----------------------------------------------------------------------------
let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

// -----------------------------------------------------------------------------
// Objeto para gerenciar a aplicação
// -----------------------------------------------------------------------------
let app = {

    // Método para inicializar a aplicação
    start: function() {
        // Mantém um controle da posição da questão
        this.currPosition = 0;

        // Obtém o elemento de todas as alternativas
        let alts = document.querySelectorAll('.alternative');

        // Ao invés de uma Arrow Function, poderíamos utilizar o .bind
        // alts.forEach(function(element, index){
        //   // Listener para capturar o clique
        //   element.addEventListener('click', function(){
        //     // Verifica se a alternativa está correta
        //     this.checkAnswer(index);
        //   }.bind(this));
        // }.bind(this));

        // Percorre cada alternativa
        alts.forEach((element, index) => {
            // Listener para capturar o clique
            element.addEventListener('click', () => {
                // Verifica se a alternativa está correta
                this.checkAnswer(index);
            });
        });

        // Exibe a questão atual
        this.showQuestion(questions[this.currPosition]);
    },

    // Método para exibir a primeira questão
    showQuestion: function(q) {
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
    },

    // Método para checar se a alternativa está correta
    checkAnswer: function(userSelected) {
        // Questão atual
        let currQuestion = questions[this.currPosition];

        // Questão correta
        if(currQuestion.correctAnswer == userSelected) {
            console.log("Correct Answer");
        }
        // Questão incorreta
        else {
            console.log("Wrong Answer");
        }

        // Passa para a próxima questão
        this.increasePosition();

        // Exibe a próxima questão
        this.showQuestion(questions[this.currPosition]);
    },

    // Método para atualizar a posição da questão
    increasePosition: function() {
        // Incrementa a posição da questão
        this.currPosition++;

        // Verifica se chegou na última questão
        if (this.currPosition == questions.length) {
            // Retorna para a primeira questão
            this.currPosition = 0;
        }
    }

};

// -----------------------------------------------------------------------------
// Inicializa a aplicação
// -----------------------------------------------------------------------------
app.start();
