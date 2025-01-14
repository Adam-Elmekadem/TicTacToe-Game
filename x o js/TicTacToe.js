let winnerElement = document.getElementById("winner");

        function displayWinner(num1, num2, num3) {
            winnerElement.textContent = `${squares[num1]} wins the game`;
            document.getElementById("item" + num1).style.background = "#ff00ff";
            document.getElementById("item" + num2).style.background = "#ff00ff";
            document.getElementById("item" + num3).style.background = "#ff00ff";
            // Désactiver les clics après la victoire
            document.querySelectorAll(".square").forEach(square => square.style.pointerEvents = "none");
        }

        let squares = [];

        function whoWin() {
            for (let i = 1; i < 10; i++) {
                squares[i] = document.getElementById("item" + i).innerHTML;
            }

            if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== "") {
                displayWinner(1, 2, 3);
            } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== "") {
                displayWinner(4, 5, 6);
            } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== "") {
                displayWinner(7, 8, 9);
            } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== "") {
                displayWinner(1, 4, 7);
            } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== "") {
                displayWinner(2, 5, 8);
            } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== "") {
                displayWinner(3, 6, 9);
            } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== "") {
                displayWinner(1, 5, 9);
            } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== "") {
                displayWinner(3, 5, 7);
            }
        }

        let title = document.querySelector(".second-title");
        let title1 = document.querySelector(".title1");
        let turn = "x";

        function game(id) {
            let element = document.getElementById(id);

            if (element.innerHTML === "") {
                if (turn === "x") {
                    element.innerHTML = "X";
                    turn = "o";
                    title1.innerHTML = "O";
                    title.innerHTML = "turn";
                } else if (turn === "o") {
                    element.innerHTML = "O";
                    turn = "x";
                    title1.innerHTML = "X";
                    title.innerHTML = "turn";
                }
                whoWin();

            }
        }