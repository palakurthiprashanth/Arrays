function removeEven(store) {
  var result = store.filter(function(item) {
    return item % 2 !== 0;
  });
  return result;
}
console.log(removeEven([3, 2, 41, 3, 34]));
