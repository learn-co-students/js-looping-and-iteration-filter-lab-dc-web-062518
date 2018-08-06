// Code your solution in this file

function findMatching(drivers, user_input_name) {
  let result = drivers.filter(function (name) { return user_input_name.toLowerCase() == name.toLowerCase(); });
  return result;
}

function fuzzyMatch(drivers, user_input_name) {
  let result = drivers.filter(function (name) { return user_input_name.substring(0,2) == name.substring(0,2); });
  return result;
}

function matchName(drivers, user_input_name) {
  let newDrivers = []
  for (const driver of drivers){
    if (driver.name === user_input_name) {
      newDrivers.push(driver)
    }
  }
  return newDrivers;
}
