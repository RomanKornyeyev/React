import { TURNS, WINNER_COMBOS } from "../constants"

export const ButtonInitialTurn = ({ turn, updateTurn }) => {
  const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X

  const handleClick = () => {
    updateTurn()
  }

  return (
    <div onClick={handleClick} className='button-initial-turn'>
      Empezar con: <b>{newTurn} </b>
    </div>
  )
}

export const ButtonResetGame = ({ resetGame }) => {
  return (
    <div onClick={resetGame} className='button-initial-turn'>
      Resetear el juego
    </div>
  )
}