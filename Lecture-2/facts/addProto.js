let arr = [1,2,3,4,5,6];
Array.prototype.myMap = function(func) {
  return this.map(func);
}

const arr1 = arr.myMap(x => x*x);
console.log(arr);
console.log(arr1);

Array.prototype.myFilter = function(fucn) {
  return this.filter(func);
}
