const radius = [2, 5, 3, 8, 9];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const circumference = function (radius) {
  return radius * 2 * Math.PI;
};

const calculate = function (logic, radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(area, radius));
console.log(calculate(diameter, radius));
console.log(calculate(circumference, radius));
