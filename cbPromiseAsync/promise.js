function randomNumGenrator(min, max) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() * (max - min) + min);
    }, 2000);
  });
}
//method 1
function printNo(num) {
  num.then((res) => {
    console.log(res);
  });
}
printNo(randomNumGenrator(4, 6));

//method 2
randomNumGenrator(4, 6).then((res) => {
  console.log(res);
});




createOrder((orderId)=>{
  proceedToPayment(orderId,(amount)=>{
        orderSummary(amount,(balance)=>{
              updateWallet(balance)
        })        
  })
})