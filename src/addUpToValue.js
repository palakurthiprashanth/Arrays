function findSum(store, value) {
  // sort the array
  store.sort(function(a, b) {
    return a - b;
  });
  var result = [];
  var index1 = 0;
  var index2 = store.length - 1;
  var sum;
  while (index1 !== index2) {
    sum = store[index1] + store[index2];
    if (sum < value) {
      index1++;
    } else if (sum > value) {
      index2--;
    } else {
      result.push(store[index1]);
      result.push(store[index2]);
      return result;
    }
  }
  return false;
}

console.log(findSum([1, 2, 3, 4], 5));
console.log(findSum([1, 2, 3, 4], 10));
// TC -> nlogn
