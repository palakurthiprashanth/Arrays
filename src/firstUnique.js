function findFirstUnique(store) {
  var index2;
  for (var index1 = 0; index1 < store.length; index1++) {
    index2 = 0;
    while (index2 < store.length) {
      if (index1 !== index2 && store[index1] === store[index2]) {
        break;
      }
      index2++;
    }
    if (index2 === store.length) {
      return store[index1];
    }
  }
  return false;
}
console.log(findFirstUnique([9, 2, 3, 6, 2, 6, 9, 0, 3]));

// TC==> O(N)
