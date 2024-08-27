console.log("first")

function createOrder(proceedToPayment){
    setTimeout(()=>{
        let orderId=12345
        console.log(`${orderId} is generated`)
        proceedToPayment(orderId)
    },2000)
}

function proceedToPayment(id,orderSummary){
   setTimeout(()=>{
    let payment=416
    console.log(`orderId ${id} have ${payment} rupee`)
    orderSummary(payment)
   },2000)
}

function orderSummary(payment,updateWallet){
    setTimeout(()=>{
     console.log(`brought a tshirt for ${payment} rupee`)
     let balance=1000-payment
     updateWallet(balance)
    },2000)
 }

 function updateWallet(balance){
    setTimeout(()=>{
        console.log(`current balace ${balance} rupee`)
    },2000)
 }

 
createOrder((orderId)=>{
    proceedToPayment(orderId,(payment)=>{
        orderSummary(payment,(balance)=>{
            updateWallet(balance)
        })
    })
})


console.log("second")
