var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

var newarr = arrays.reduce(function(previous,current){
  return previous.concat(current);
}, []);

console.log(newarr);

// → [1, 2, 3, 4, 5, 6]
