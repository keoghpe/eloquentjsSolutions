function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var motherChildAgeDiff = average(ancestry.filter(hasKnownMother).map(difference));

function hasKnownMother(person){
  if(byName[person.mother])
  	return person;
}

function difference(person){
  return byName[person.name].born - byName[person.mother].born;
}

console.log(motherChildAgeDiff);

// → 31.2
