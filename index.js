
function findMatching(drivers, name) {
  let newArray = [];
  for (let arrayElement of drivers) {
    if (arrayElement.toLowerCase() === name.toLowerCase()) {
      newArray.push(arrayElement)
    }
  }
  return newArray
}

function fuzzyMatch(drivers, name) {
  let newArray = [];
  for (let arrayElement of drivers) {
    if (arrayElement.slice(0,1) === name.slice(0,1)) {
      newArray.push(arrayElement)
    }
  }
  return newArray
}

function matchName(drivers, name) {
  let newArray = [];
  for (let arrayElement of drivers) {
    if (arrayElement.name === name) {
      newArray.push(arrayElement)
    }
  }
  return newArray
}
