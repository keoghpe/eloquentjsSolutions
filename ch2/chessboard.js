// My original solution was this complicated thing
// var size = prompt("Enter a size");
//
// var current = '#',
//     next = ' ',
//     store = ' ',
//     string = '';
//
// for(var i = 0; i < size*size; i++){
//   if(i % size === 0 && i !== 0){
//   	string += '\n';
//     if(size%2===0){
//       	string += next;
//     	continue;
//     }
//   }
//
//   string += current;
//   store = current;
//   current = next;
//   next = store;
// }
//
// console.log(string);
 

//After reading the hints section of the exercise this is the solution I came up with

var size = prompt("Enter a size"),
    string = '';

for(var i =0; i < size; i++){
  for(var j=0; j < size; j++){
    //adding the current coordinates allows you to tell if the line is even or odd
    string+= (i+j)%2 ===0 ?'#' :' ';
  }
  string += '\n';
}

console.log(string);
