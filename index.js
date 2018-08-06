// Code your solution in this file
function findMatching(drivers, str)
{
  const driversFound = drivers.filter(function (driver) {
    return driver.toLowerCase() === str.toLowerCase();
  })
  return driversFound
}

function fuzzyMatch(drivers, str)
{
  const n = str.length
  const driversFound = drivers.filter(function (driver) {
    return driver.slice(0, n).toLowerCase() === str.toLowerCase();
  })
  return driversFound
}

function matchName(drivers, str) {
  const driversFound = drivers.filter(function (driver) {
    return driver.name.toLowerCase() === str.toLowerCase();
  })
  return driversFound
}
