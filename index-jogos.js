

// 1. Variáveis de Estado
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart-button');

// Array que representa o tabuleiro: 0-8. ' ' = vazio.
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X'; // O jogador 'X' começa
let gameActive = true; // O jogo está em andamento?

// Padrões de vitória (índices no array gameBoard)
const winningConditions = [
    [0, 1, 2], // Linhas
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Colunas
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonais
    [2, 4, 6]
];

// 2. Funções do Jogo

// Manipula o clique em uma célula
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    // O índice da célula é pego do atributo 'data-index' no HTML
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    // Verifica se a célula já está preenchida ou se o jogo acabou
    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Preenche a célula e atualiza o estado do jogo
    handlePlayerMove(clickedCell, clickedCellIndex);
    checkResult();
}

// Atualiza o HTML e o array do tabuleiro
function handlePlayerMove(cell, index) {
    gameBoard[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
    // Adiciona a classe para estilização de cor
    cell.classList.add(currentPlayer.toLowerCase());
}

// Verifica se houve um vencedor ou um empate
function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue; // Pula se alguma célula na condição de vitória estiver vazia
        }
        
        // Se as três forem iguais e não vazias, há um vencedor
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `O Jogador **${currentPlayer}** Venceu! 🎉`;
        gameActive = false; // Termina o jogo
        return;
    }

    // Verifica se houve empate (se todas as células estão preenchidas e não houve vitória)
    let roundDraw = !gameBoard.includes('');
    if (roundDraw) {
        statusDisplay.innerHTML = `Empate! 🤝`;
        gameActive = false;
        return;
    }

    // Se não houver vencedor nem empate, troca o jogador
    handlePlayerChange();
}

// Troca o jogador atual
function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = `Vez do Jogador **${currentPlayer}**`;
}

// Reinicia o jogo
function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = `Vez do Jogador **${currentPlayer}**`;
    
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('x', 'o');
    });
}

// 3. Listeners de Eventos

// Adiciona um listener de clique a cada célula
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Adiciona um listener de clique ao botão de reiniciar
restartButton.addEventListener('click', restartGame);