const Ship = (length) => {
  const hitLocations = Array(length).fill(0)

  const hit = (position) => {
    hitLocations[position] = 'X'
  }
  const isSunk = () => hitLocations.every(element => element === 'X')

  return { hitLocations, hit, isSunk }
}

export default Ship
