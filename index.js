// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter(word=> word.toLowerCase()===string.toLowerCase())
}

function fuzzyMatch(drivers,string) {
  return drivers.filter(word=> word.substring(0,2).toLowerCase()===string.toLowerCase())
}

function matchName(drivers, string) {

  return drivers.filter(element=> element.name === string)

}
