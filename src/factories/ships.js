const Ship = (length, location) => {
  const hitLocations = new Array(length).fill(false)

  const hit = (position) => {
    hitLocations[position] = 'X'
  }
  const isSunk = () => hitLocations.every(element => element === 'X')

  return { hitLocations, hit, isSunk }
}

export default Ship
