function findMatching(collection, name) {
  return collection.filter(function (element) {
    return element.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(collection, name) {
  var filteredNames = collection.filter(function (element) {
       return element.substring(0, 1) === name.substring(0, 1);
  })
  return filteredNames;
}

function matchName(array, string) {
  return array.filter(element => element.name === string);
}
