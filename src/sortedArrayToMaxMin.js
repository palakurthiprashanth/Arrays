function maxMin(store) {
  var result = [];
  var mid = Math.floor(store.length / 2);
  for (var i = 0; i < mid; i++) {
    result.push(store[store.length - (i + 1)]);
    result.push(store[i]);
  }
  if (store.length % 2 !== 0) {
    result.push(store[Math.floor(store.length / 2)]);
  }
  return result;
}
console.log(maxMin([1, 2, 3, 4, 5, 6, 7]));
