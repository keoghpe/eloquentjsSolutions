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
