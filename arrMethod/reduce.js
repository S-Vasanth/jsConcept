let details = [
  { name: "vasanth", class: 10, mark: 88 },
  { name: "ajay", class: 10, mark: 70 },
  { name: "ram", class: 10, mark: 50 },
];

let sumOfMark = details.reduce((acc, curElement) => {
  return  acc + curElement.mark;
}, 0);
console.log(sumOfMark);

let getFiftyPlusMark = details.reduce((acc, curElement) => {
  if (curElement.mark > 50) acc.push(curElement.name);
  return acc;
}, []);
console.log(getFiftyPlusMark);
