function findMinimum(store) {
  var min = store[0];
  for (var value of store) {
    if (value < min) {
      min = value;
    }
  }
  return min;
}
console.log(findMinimum([9, 2, 3, 6]));

//TC - O(n);
// can also be done by sorting and returning 1st value
//but TC will be nlogn
