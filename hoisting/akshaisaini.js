console.log(a); //undefined because we console it before assignment
console.log(b); //Cannot access 'b' before initialization
getname(); //vasanth is consoled
getname1(); //undefined because getname1 function is consider as a variable
var a = 10;
let b = 100;

function getname() {
  console.log("vasanth");
}

var getname1 = () => {
  console.log("hello");
};

getname1(); //hello is consoled
