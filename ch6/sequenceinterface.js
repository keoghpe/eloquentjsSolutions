// Your code here.
function Collection(someVals){
  this.vals = someVals;
  this.length = someVals.length;
  this.index = -1;
}

Collection.prototype.next = function(){
  this.index++;
  this.length--;
  return this.vals[this.index];
}

Collection.prototype.hasNext  = function(){
  return this.length <= 0 ? false : true;
}

function ArraySeq(anArray){
  Collection.call(this, anArray);
}
ArraySeq.prototype = Object.create(Collection.prototype);

function RangeSeq(min, max){
  var anArray = [];
  while(min < max+1){
    anArray.push(min++);
  }

  Collection.call(this, anArray);
}
RangeSeq.prototype = Object.create(Collection.prototype);

function logFive(someCollection){

  var logged = 0;
  while(someCollection.hasNext()){
    if(logged < 5){
    	console.log(someCollection.next());
      	logged++;
    } else {
      break;
    }
  }
}



logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
