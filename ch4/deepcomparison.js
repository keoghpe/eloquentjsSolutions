function deepEqual(a,b){

  if(a === b)
    return true;
  if(a == null || b == null || typeof a != 'object'|| typeof b != 'object'){
    return false;
  }
///this isn't good enough... fix this... needs to be more detailed
  if(typeof a === 'object' && typeof b === 'object'){
    for(var key in a){
      return deepEqual(a[key], b[key]);
      }
    }
  else
    return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null, null));


// function deepEqual(a, b) {
//   if (a === b) return true;
//
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object")
//     return false;
//
//   var propsInA = 0, propsInB = 0;
//
//   for (var prop in a)
//     propsInA += 1;
//
//   for (var prop in b) {
//     propsInB += 1;
//     if (!(prop in a) || !deepEqual(a[prop], b[prop]))
//       return false;
//   }
//
//   return propsInA == propsInB;
// }
