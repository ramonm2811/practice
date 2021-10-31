"use strict";

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

const averDol = calcAverage(85, 54, 41);
const averKoa = calcAverage(23, 34, 27);

function checkWinner(dol, koa) {
  if (dol >= 2 * koa) {
    console.log(`Dolphins win (${dol} vs ${koa})`);
  } else if (koa >= 2 * dol) {
    console.log(`Koalas win (${dol} vs ${koa})`);
  } else {
    console.log("None of them won");
    console.log(dol, koa);
  }
}

checkWinner(averDol, averKoa);
 */

/* function calcTip(bill) {
  return bill >= 20 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tip.push(calcTip(bills[i]));
  total.push(tip[i] + bills[i]);
}

console.log(tip);
console.log(total);
 */

/* const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Jose", "Pepe"],
  driverLicense: false,
  
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  summary: function () {
    console.log(
      `${this.firstName} is a ${this.age} years old ${this.job}, and he ${
        this.driverLicense ? "has" : "has not"
      } a driver's license`
    );
  },
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.calcAge());

jonas.summary();
 */

/* const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})!`
  );
} else if (mark.bmi === john.bmi) {
  console.log("Las BMI de ambos son iguales " + mark.bmi);
} */
/* console.log(
  `${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})!`
);
 */

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(bills[i] + tip);
}

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(bills);
console.log(tips);
console.log(total);

function calcAverage(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  console.log(suma / arr.length);
}

calcAverage(bills);
calcAverage(tips);
calcAverage(total);
 */

var person = {
  name: "John", //String
  lastname: "Doe",
  age: 35, //Number
  gender: "male",
  lucky_numbers: [7, 11, 13, 17], //Array
  significant_other: person2, //Object, yes the same variable/object defined after
};

var person2 = {
  name: "Jane",
  lastname: "Doe",
  age: 38,
  gender: "female",
  lucky_numbers: [2, 4, 6, 8],
  significant_other: person,
};

var person3 = {};

var family = {
  lastname: "Doe",
  members: [person, person2], //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray) {
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  for (let i = 0; i < anArray.length; i++) {
    for (let j = 0; j < anArray[i].lucky_numbers.length; j++) {
      sumOfAllLuckyNumbers += anArray[i].lucky_numbers[j];
    }
  }
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
family.members[0].lucky_numbers[3] = 33;

family.members.push(person3);

family.members[2].name = "Jimmy";
family.members[2].lastname = "Doe";
family.members[2].age = 13;
family.members[2].gender = "Male";
family.members[2].lucky_numbers = [1, 2, 3, 4];
family.members[2].significant_other = null;

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));
