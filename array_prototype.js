let colors = ['Red', 'Green', 'Blue'];

const upper = colors.map((color) => color.toUpperCase())

console.log(upper)


Array.prototype.myMap = function(cb){
  let arr = [];
  for(let i = 0; i < this.length; i++ ){
    arr.push(cb(this[i], i, this))
  }
  return arr;
}

const custom = colors.myMap((color, i, ar) => console.log(color, i, ar));
console.log(custom)