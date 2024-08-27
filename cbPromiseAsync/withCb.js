function randomNumGenrator(min, max, cb) {
  setTimeout(() => {
    const a = Math.random() * (max - min) + min;
    cb(a);
  }, 2000);
}

function printNo(num) {
  console.log(num);
}
randomNumGenrator(4, 6, printNo);
randomNumGenrator(4, 6, (num) => {
  console.log(num);
});
