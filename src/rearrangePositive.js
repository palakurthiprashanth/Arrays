function reArrange(store) {
  var leftMostElement = 0;
  var temp;
  for (var i = 0; i < store.length; i++) {
    // check for negitive element
    // if negitive incremet to next
    // and if it becomes positive
    // try to find another negitve and swap
    if (store[i] < 0) {
      if (i !== leftMostElement) {
        temp = store[i];
        store[i] = store[leftMostElement];
        store[leftMostElement] = temp;
      }
      leftMostElement = leftMostElement + 1;
    }
  }
  return store;
}
console.log("===Re reArrange ===");
console.log(reArrange([-10, -1, 20, 4, 5, -9, -6]));
// TC is O(n)
