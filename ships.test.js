import { describe, it, expect } from "vitest";
import carrier from "./ships";

it('carrier length is 5', () => {
  expect(carrier.hitLocations.length).toBe(5)
});

it('Hit a ship should show an X in hitLocations', () => {
  carrier.hit(2)
  expect(carrier.hitLocations).toContain('X')
});

it('When ship has not full hits it should not sink', () => {
  expect(carrier.isSunk()).toBeFalsy()
})

it('When ship is full of hits it should sink', () => {
  carrier.hit(0)
  carrier.hit(1)
  carrier.hit(2)
  carrier.hit(3)
  carrier.hit(4)
  expect(carrier.isSunk()).toBeTruthy()
})