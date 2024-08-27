const arr1 = [
    { name: "vasanth", age: 22, occupation: "IT" },
    { name: "pranav", age: 18, occupation: "yt" },
    { name: "arulselvam", age: 21, occupation: "Mech" }
];

const arr2 = [
    { name: "vasanth", age: 22, occupation: "IT" },
    { name: "pranav", age: 18, occupation: "yt" },
    { name: "sandhanakrishana", age: 21, occupation: "Mech" },
    { name: "aksahi", age: 20, occupation: "Mech" }
];


const result=arr2.filter((item2)=>(!arr1.find((item1)=>item1.name===item2.name)))
console.log(result)