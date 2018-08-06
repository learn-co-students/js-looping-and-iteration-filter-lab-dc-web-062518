function findMatching(drivers, name){
 return drivers.filter(function(n) {return n.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(name) {
    return name.toLowerCase().startsWith(letters.toLowerCase())});
}

function matchName(drivers, name){
  return drivers.filter(function(obj) {
    return obj.name.toLowerCase() === name.toLowerCase()});
}
