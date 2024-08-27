function randomNumGenrator(min, max) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random() * (max - min) + min);
    }, 2000);
  });
}
async function printNo(num) {
  console.log(await num);
}
printNo(randomNumGenrator(4, 6));
