let person = function (name, dateOfYear, gender) {
  this.name = name;
  this.dateOfYear = dateOfYear;
  this.gender = gender;
};
person.prototype.calculateAge = function () {
  console.log(`current age ${new Date().getFullYear() - this.dateOfYear}`);
};

let boxer = function (name, dateOfYear, gender, medal) {
  person.call(this, name, dateOfYear, gender);
  this.medal = medal;
};

boxer.prototype = Object.create(person.prototype);

boxer.prototype.wonmedal = function () {
  this.medal++;
  console.log(`medal is ${this.medal}`);
};

let vasanth = new boxer("vasanth", 2001, "male", 10);
vasanth.calculateAge();
vasanth.wonmedal();
