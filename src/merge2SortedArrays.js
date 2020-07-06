function mergeArrays(store1, store2) {
  return [...store1, ...store2].sort(function(a, b) {
    return a - b;
  });
}
console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]));

//TC==> O(nlogn)
