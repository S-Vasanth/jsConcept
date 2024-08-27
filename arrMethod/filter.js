let details = [
  { name: "vasanth", class: 10, mark: 88 },
  { name: "ajay", class: 10, mark: 70 },
  { name: "ram", class: 10, mark: 50 },
];

let markInfo = details.filter((ele) => ele.mark > 55);
console.log(markInfo);
