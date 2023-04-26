import { it, expect } from 'vitest'
import Ship from '../ships'

const carrier = Ship(5)
const boat = Ship(2)

it('carrier length is 5', () => {
  expect(carrier.hitLocations.length).toBe(5)
})

it('ship length is 2', () => {
  expect(boat.hitLocations.length).toBe(2)
})

it('Hit a ship should show an X in hitLocations', () => {
  carrier.hit(2)
  boat.hit(1)
  expect(carrier.hitLocations).toContain('X')
  expect(boat.hitLocations).toContain('X')
})

it('When ship has not full hits it should not sink', () => {
  expect(boat.isSunk()).toBeFalsy()
  expect(carrier.isSunk()).toBeFalsy()
})

it('When ship is full of hits it should sink', () => {
  carrier.hit(0)
  carrier.hit(1)
  carrier.hit(2)
  carrier.hit(3)
  carrier.hit(4)
  boat.hit(0)
  boat.hit(1)
  boat.hit(2)
  boat.hit(3)
  boat.hit(4)

  expect(boat.isSunk()).toBeTruthy()
  expect(carrier.isSunk()).toBeTruthy()
})
