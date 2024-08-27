let info={
  details :[
  { name: "vasanth", class: 10, mark: 88 },
  { name: "ajay", class: 10, mark: 70 },
  { name: "ram", class: 10, mark: 50 },
]
}

let name = info.details.map((ele) => {
  return `${ele.name} get ${ele.mark} marks `;
});

console.log(name);

let getFiftyPlusMark = info.details.filter((ele) => ele.mark > 50).map((ele) => ele.name);
console.log(getFiftyPlusMark);
