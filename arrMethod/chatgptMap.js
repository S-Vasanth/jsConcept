// Question: Suppose you have an array called numbers containing a list of integers.
//  Using the map method in JavaScript, write a code snippet that doubles each number in
//   the array and returns a new array with the doubled values.

const arr=[5,8,98,6,43,87,0,98]
const newArr=arr.map((cur)=>{

    if(Math.floor(cur/10)>1){
         return cur
    }
})

console.log(newArr)