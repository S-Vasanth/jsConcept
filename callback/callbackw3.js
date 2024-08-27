//JavaScript Callbacks
//A callback is a function passed as an argument to another function.

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  setTimeout(() => {
    let sum = num1 + num2;
    myCallback(sum);
  }, 2000);
}

myCalculator(5, 5, myDisplayer); //type-1
myCalculator(
  5,
  5,
  (Callback = (sum) => {
    console.log(sum + 1);
  })
); //type - 2
myCalculator(5, 5, (sum) => {
  console.log(1 + sum + 1);
}); //type-3

function createOrder(user, callback) {
  let product = "t-shrit";
  callback(user, product, orderSummary);
}
createOrder("vasanth", payment);

function payment(user, product, callback) {
  let price = 200;
  callback(user, price, product);
}

function orderSummary(user, price, product) {
  console.log(`${user} purchased ${product} worth ${price}`);
}
//////////////////////////////////////////////////////////////
function createOrder(user, callback1, callback2) {
  let product = "t-shrit";
  callback1(user, product, callback2);
}

function payment(user, product, callback2) {
  let price = 200;
  callback2(user, price, product);
}

function orderSummary(user, price, product) {
  console.log(`${user} purchased ${product} worth ${price}`);
}

createOrder("vasanth", payment, orderSummary);
