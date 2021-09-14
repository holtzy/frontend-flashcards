const array1 = [1, 2, 3, 4];

// 1/ reduce applies a callback function to each item of an array
// 2/ this callback function outputs a value. This value can be passed to the next iteration
// 3/ The first 2 arguments of the callback function are
//    i/ the previous value (the result of the previous iteration)
//    ii/ the current value in the array
const total = array1.reduce((previousValue, currentValue) => {
  console.log(previousValue);
  return previousValue + currentValue;
});
console.log("total", total);

// You can also pass an initializer: the value to start with
const total2 = array1.reduce((previousValue, currentValue) => {
  console.log(previousValue);
  return previousValue + currentValue;
}, 100);
console.log(total2);
