class Person {
  constructor(name, dateOfYear, gender) {
    this.name = name;
    this.dateOfYear = dateOfYear;
    this.gender = gender;
  }
  calculateAge() {
    console.log(`current age ${new Date().getFullYear() - this.dateOfYear}`);
  }
}

class Boxer extends Person {
  constructor(name, dateOfYear, gender, medal) {
    super(name, dateOfYear, gender);
    this.medal = medal;
  }
  wonmedal() {
    this.medal++;
    console.log(`no of medal is:${this.medal}`);
  }
}

let vasanth = new Boxer("vasanth", 2001, "male", 20);
vasanth.calculateAge();
vasanth.wonmedal();

// let GrandParent = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// GrandParent.prototype.farmland = function () {
//   console.log(`i have a farm land`);
// };

// let Parent = function (name, age, nationality) {
//   GrandParent.call(this, name, age);
//   this.nationality = nationality;
// };
// Parent.prototype = Object.create(GrandParent.prototype);

// Parent.prototype.car = function () {
//   console.log(`${this.name} have a car`);
// };

// let Child = function (name, age, nationality) {
//   Parent.call(this, name, age, nationality);
//   console.log(`i am belongs to ${this.nationality}`);
// };
// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.pen = function () {
//   console.log(`i have a pen`);
// };

// let vasanth = new Child("vasanth", 10, "india");
// vasanth.pen();
// vasanth.car();
// vasanth.farmland();
