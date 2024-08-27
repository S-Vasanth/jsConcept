function outer() {
  var a = 10;
  return function inner() {
    console.log(a);
  };
}

var close = outer();
console.log(close);
close();
