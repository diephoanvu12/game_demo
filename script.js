document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");
    const rows = 8;
    const cols = 8;

    // Function to create chessboard squares
    function createSquare(row, col) {
        const square = document.createElement("div");
        square.classList.add("square");
        if ((row + col) % 2 === 0) {
            square.style.backgroundColor = "#f0d9b5";
        } else {
            square.style.backgroundColor = "#b58863";
        }
        return square;
    }

    // Function to create random pieces
    function createRandomPieces() {
        const team1Pieces = [];
        const team2Pieces = [];
        const numPieces = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // Random number of pieces (2-5)

        for (let i = 0; i < numPieces; i++) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);
            const piece = document.createElement("div");
            piece.textContent = String.fromCharCode(65 + i); // ASCII codes for letters
            piece.classList.add("piece");

            if (i % 2 === 0) {
                piece.classList.add("team1");
                team1Pieces.push({ row, col });
            } else {
                piece.classList.add("team2");
                team2Pieces.push({ row, col });
            }

            chessboard.children[row * cols + col].appendChild(piece);
        }

        console.log("Team 1 Pieces:", team1Pieces);
        console.log("Team 2 Pieces:", team2Pieces);
    }

    // Create chessboard
    for (let i = 0; i < rows * cols; i++) {
        const square = createSquare(Math.floor(i / cols), i % cols);
        chessboard.appendChild(square);
    }

    // Create random pieces on the board
    createRandomPieces();
});
