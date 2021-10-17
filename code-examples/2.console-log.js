
const solve = (a, b, c) => {
  const sqrRoot = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
  console.log(sqrRoot); // expect 4
  const top = (-1 * b) + sqrRoot;
  console.log(top); // expect 2
  const bottom = 2 * a;
  console.log(bottom) // expect 2
  const result = top / bottom;
  return result;
}
console.log(solve(1, 2, -3)); // we expect 1
