function sum(x){
  if(arguments.length === 1){
    return function(y){return x + y}
  }else{
    return arguments[0]+arguments[1];
  }

}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5