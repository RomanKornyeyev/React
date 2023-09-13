import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

/* components */
import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { ButtonInitialTurn, ButtonResetGame } from "./components/Buttons"

/* constants */
import { TURNS, WINNER_COMBOS } from "./constants"

/* logic */
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { resetGameStorage, saveGameStorage } from "./logic/storage"


/* ========================================== */


function App() {
  console.log('Render');

  //se lee del localstorage únicamente una vez, para ahorrar tiempo
  //si lo ponemos fuera se lee cada vez que se renderice innecesariamente
  const [board, setBoard] = useState(() => {
    console.log('Inicializando el estado del board');
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null = no hay ganador, false = empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateTurn = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición si ya tiene algo
    // return corta la ejecución del código y sale de la función
    if (board[index] || winner) return

    //actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    updateTurn()

    //guardar partida
    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })

        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

      {/* CAMBIAR TURNO INICIAL */}
      <section className="turn">
        {
          /* si la partida ha empezado, quitamos el button de cambiar de turno */
          board.every(element => element === null)
          ? <ButtonInitialTurn turn={turn} updateTurn={updateTurn} />
          : <ButtonResetGame resetGame={resetGame}/>
        }
      </section>
    </main>
  )
}

export default App
