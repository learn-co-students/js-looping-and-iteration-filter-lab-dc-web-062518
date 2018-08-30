// Code your solution in this file
function findMatching(drivers, match){
    return drivers.filter(driver => new RegExp(match, 'i').test(driver))
}

function fuzzyMatch(drivers, beginning){ 
    return drivers.filter(driver => driver.startsWith(beginning))

}

function matchName(drivers, match) {
    return drivers.filter(drivers => drivers.name == match)
}