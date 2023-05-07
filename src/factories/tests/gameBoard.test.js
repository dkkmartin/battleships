import { it, expect } from 'vitest'
import GameBoard from '../gameBoard'
import Ship from '../ships'

const myGameBoard = GameBoard()
const carrier = Ship(5)

it('board is initialized with length of 10', () => {
  expect(myGameBoard.board).toHaveLength(10)
})

it('Each index in board array is length of 10', () => {
  expect(myGameBoard.board[0]).toHaveLength(10)
  expect(myGameBoard.board[1]).toHaveLength(10)
  expect(myGameBoard.board[2]).toHaveLength(10)
  expect(myGameBoard.board[3]).toHaveLength(10)
  expect(myGameBoard.board[4]).toHaveLength(10)
  expect(myGameBoard.board[5]).toHaveLength(10)
  expect(myGameBoard.board[6]).toHaveLength(10)
  expect(myGameBoard.board[7]).toHaveLength(10)
  expect(myGameBoard.board[8]).toHaveLength(10)
  expect(myGameBoard.board[9]).toHaveLength(10)
})

it('Each index in every board array is filled with empty array', () => {
  for (let i = 0; i < myGameBoard.board.length; i++) {
    expect(myGameBoard.board[i].every((item) => item === [])).toBeDefined()
  }
})

it('Ship should be placed on gameboard', () => {
  myGameBoard.placeShip(carrier, 0, 5, true)
  expect(myGameBoard.board[0][5]).toBeDefined()
})

it('should place a horizontal ship on the board', () => {
  myGameBoard.placeShip(carrier, 0, 0, true)

  expect(myGameBoard.board[0][0]).toEqual(carrier)
  expect(myGameBoard.board[1][0]).toEqual(carrier)
  expect(myGameBoard.board[2][0]).toEqual(carrier)
  expect(myGameBoard.board[3][0]).toEqual(carrier)
  expect(myGameBoard.board[4][0]).toEqual(carrier)
})

it('Should place a vertical ship on the gameboard', () => {
  myGameBoard.placeShip(carrier, 2, 3, false)

  expect(myGameBoard.board[2][3]).toEqual(carrier)
  expect(myGameBoard.board[2][4]).toEqual(carrier)
  expect(myGameBoard.board[2][5]).toEqual(carrier)
  expect(myGameBoard.board[2][6]).toEqual(carrier)
  expect(myGameBoard.board[2][7]).toEqual(carrier)
})

it('should place a ship vertically on the gameboard', () => {
  const destroyer = Ship(2)
  myGameBoard.placeShip(destroyer, 2, 3, false)

  expect(myGameBoard.board[2][3]).toEqual(destroyer)
  expect(myGameBoard.board[2][4]).toEqual(destroyer)
})
