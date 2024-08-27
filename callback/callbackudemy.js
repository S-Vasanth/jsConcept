//type 2
const geolocation=(address,callback)=>{
    setTimeout(() => {
        const data = {
            latitude: 10,
            longitude: 4
        }
        callback(data)
    }, 2000)
}
geolocation('sembanarkoil',(info)=>{
     console.log(info)
})

//type 3
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4,(sum) => {
    console.log(sum) // Should print: 5
})

