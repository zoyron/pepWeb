const arr = [2,6,17,28,46,68];

const arr1 = arr.map(x => {
  if(x%2)
    return x-1;
  else
    return x+1;
});

console.log(arr1);
// for(let i = 0;i<10;i++)
//   console.log(arr1[i]);

const arr2 = arr1.filter(x => {
  let i;
  for(i = 2;i<x;i++) {
    if(x%i == 0)
      break;
  }
  if(i == x)
    return x;
})

console.log(arr2);