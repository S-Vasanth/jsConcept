var promise = new Promise(function (resolve, reject) {
  // const x = "geeksforgeeks";
  // const y = "geeksforgeeks";
  setTimeout(()=>{
     resolve('succes')
  },4000)

});

promise
  .then(function (res) {
    console.log(res);
  })
  .catch(function () {
    console.log("Some error has occurred");
  });
////////////////////////////
async function runAsync() {
  try {
    const res = await createPromise();
    console.log(res);
  } catch (error) {
    console.log("Some error has occurred");
  }
}
