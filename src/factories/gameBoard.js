const gameBoard = () => {
  const board = new Array(10)
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(10).fill('')
  }
}

export default gameBoard
