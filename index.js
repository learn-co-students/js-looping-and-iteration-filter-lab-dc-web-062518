function findMatching(arr, name) {
  return arr.filter(function(arrElement) {
    return arrElement.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, name) {
  newArr = [];
  for (const arrElement of arr) {
    if (arrElement.substring(0, 1) === name.substring(0, 1)) {
      newArr.push(arrElement);
    }
  }
  return newArr;
}

function matchName(arr, name) {
  newArr = [];
  for (element of arr) {
    if (element.name === name) {
      newArr.push(element);
    }
  }
  return newArr;
}
