const solve = (a, b, c) => {
  const result = (-1 * b + Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a);
  return result;
}
console.log(solve(1, 2, -3)); // we expect 1
