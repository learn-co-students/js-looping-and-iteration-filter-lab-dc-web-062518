// Code your solution in this file


function findMatching(drivers, name) {
  return drivers.filter(function(element){
    return element.toLowerCase() === name.toLowerCase();
  })
console.log(findMatching(name));
};


function fuzzyMatch(drivers, name) {
  return drivers.filter(function(element){
    return element.slice(0,1) === name.slice(0,1);
  })
console.log(findMatching(name));
};

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(drivers, name) {
  return drivers.filter(function(element){
    return element.name === name;
  })
console.log(findMatching(name));
};
