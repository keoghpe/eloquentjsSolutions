function range(start, end, step){
  var step = Math.sqrt(step*step) || 1;
  var myArr = [];

  if(start < end){
    for(var i = start; i<=end; i+=step)
    	myArr.push(i);
  } else {
    for(var i = start; i>=end; i-=step)
    	myArr.push(i);
  }
  return myArr;
}

function sum(arr){
  console.log(arr);
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
