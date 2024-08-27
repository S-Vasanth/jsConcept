function randomNumGenrator(min, max) {
  setTimeout(() => {
    return Math.random() * (max - min) + min;
  }, 2000);
}
console.log(randomNumGenrator(4, 6));
