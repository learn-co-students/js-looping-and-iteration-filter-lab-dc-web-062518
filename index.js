// Code your solution in this file
function findMatching(collection, name) {
  x = collection.filter(function(driver) {return driver.toLowerCase() == name.toLowerCase();
  })
  return x
}

function fuzzyMatch(collection, str) {
  x = collection.filter(function(driver) {return driver.startsWith(str);
  })
  return x
}

function matchName(collection, name) {
  x = collection.filter(function(driver) {return driver.name === name;
  })
  return x
}
