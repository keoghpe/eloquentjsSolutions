// Your code here.
function reverseArray(arr){
  var new_arr = [];
  for(var i =0; i < arr.length; i++){
    new_arr.unshift(arr[i]);
  }
  return new_arr;
}

function reverseArrayInPlace(arr){
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    var temp = arr[i];
    arr[i] = arr[arr.length - i -1];
    arr[arr.length - i -1] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
