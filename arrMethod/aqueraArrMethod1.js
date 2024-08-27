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



const map=arr1.reduce((acc, e) => {
    acc[e.name] = true
    return acc;
 }, {})
console.log(map)
const res =arr2.filter(e => !(e.name in map))
console.log(res)