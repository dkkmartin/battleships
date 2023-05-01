const GameBoard = () => {
  const board = new Array(10).fill(null).map(() => new Array(10).fill([]))

  const placeShip = (ship, startX, startY, isHorizontal) => {
    const shipLength = ship.hitLocations.length
    for (let i = 0; i < shipLength; i++) {
      const x = isHorizontal ? startX + i : startX
      const y = isHorizontal ? startY : startY + i

      if (board[x][y].length > 0) {
        throw new Error('Cannot place ship here')
      }

      board[x][y] = ship
    }
  }

  return { board, placeShip }
}

export default GameBoard
