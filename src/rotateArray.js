function rightRotate(store, k) {
  var res = store.splice(store.length - k).concat(store);
  return res;
}
console.log(rightRotate([1, 2, 3, 4, 5], 3));
