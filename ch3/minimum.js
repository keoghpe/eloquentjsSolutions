function min(a, b){
  if(a === b) return "Equal";
  return a < b ? a : b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
