function foo(x) {
  if (x === null) {
    return 0;
  }
  return x * 2;
}
console.log(foo(null)); //Output 0
console.log(foo(0));   //Output 2
console.log(foo(undefined)); //Output NaN