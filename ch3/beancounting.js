function countBs(thestring){
  return countChar(thestring, 'B');
}

function countChar(thestring, char){
  var count = 0;
  for(var i =0; i<thestring.length; i++){
    count += thestring.charAt(i) === char ? 1 : 0;
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
