
function createOrder(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let orderId=12345
        console.log(`${orderId} is generated`)
        resolve(orderId)
    },2000)
})
}

function proceedToPayment(id){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     let payment=416
     console.log(`orderId ${id} have ${payment} rupee`)
     resolve(payment)
    },2000)
 })
}

function orderSummary(payment){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`brought a tshirt for ${payment} rupee`)
        let balance=1000-payment
        resolve(balance)
    },2000)
 })
}

function updateWallet(balance){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("current balance "+balance)
    },2000)
 })
}

async function ekart(){
    let id=await createOrder()
    let payment=await proceedToPayment(id)
    let balance=await orderSummary(payment)
    let curBal=await updateWallet(balance)
    console.log(curBal)

}
ekart()