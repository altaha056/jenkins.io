var smallestNumber = function (n) {
  let ans = 1;
  while (ans <= n) {
    ans *= 2;
  }
  return ans - 1;
};
console.log(smallestNumber(4));
