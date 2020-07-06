function findSecondMaximum(store) {
  var max = Number.NEGATIVE_INFINITY;
  var secondmax = Number.NEGATIVE_INFINITY;
  for (var value of store) {
    if (value > max) {
      secondmax = max;
      max = value;
    } else if (value > secondmax && value !== max) {
      secondmax = value;
    }
  }
  return secondmax;
}

console.log(findSecondMaximum([9, 2, 3, 6]));
