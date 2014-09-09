function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {};

for(var cent = 16; cent <=21; cent++){
  centuries[cent] = average(ancestry.filter(byCentury(cent)).map(ageOfDeath));
}

console.log(centuries);

function byCentury(century){
  return function(person){
  	return Math.ceil(person.died / 100) === century;
  }
}

function ageOfDeath(person){
  return person.died - person.born;
}


// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

//The solution from the book.
//This solution really nicely abstracts away the grouping element into a generalizable function

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}
