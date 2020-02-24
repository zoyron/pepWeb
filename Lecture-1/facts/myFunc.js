function myMap(arr, myFunc) {
  for(let i = 0;i<arr.length;i++)
    arr[i] = myFunc(arr[i]);
}
function myFunc(num) {
  if(num%2)
    return num-1;
  else
    return num+1;
}

const arr = [2,6,17,28,46,68];
let arr1 = arr.slice();
myMap(arr1,myFunc);
console.log(arr1);

function myFilter(arr, myPrime) {
  for(let i = 0;i<arr.length;i++)
    arr[i] = myPrime(arr[i]);
}

function myPrime1(num) {
  for(let i = 2;i<num;i++) {
    if(num%i == 0)
      return -1;
  }
  return num;
}

myFilter(arr1, myPrime1);
for(let i = 0;i<arr1.length;i++) {
  if(arr1[i]!=-1)
    console.log(arr1[i]);
}