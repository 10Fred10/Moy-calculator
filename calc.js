const fs = require("fs");
const readline = require("readline");
const coef = [
  3,
  3,
  3,
  0.75,
  2.25,
  1.5,
  0.75,
  2.25,
  0.5,
  1.5,
  0.5,
  1.5,
  0.5,
  1.5,
  0.5,
  1.5,
  0.75,
  2.25,
  1.5,
  0.375,
  1.125,
  0.375,
  1.125
];
let students = [];
function calcMoy(line) {
  let student = {};
  student.firstName = line.shift();
  student.lastName = line.shift();
  let sum = 0;
  for (let i = 0; i < line.length; i++) {
    sum += line[i] * coef[i];
  }
  student.moy = sum / 44;
  return student;
}

const rl = readline.createInterface({
  input: fs.createReadStream("notes.txt"),
  crlfDelay: Infinity
});

rl.on("line", line => {
  let dottedLine = line.replace(/,/g, ".");
  var array = dottedLine.split(" ");
  array.splice(0, 2);
  let newStudent = calcMoy(array);
  students.push(newStudent);
});
rl.on("close", line => {
  students.sort((a, b) => (b.moy > a.moy ? 1 : a.moy > b.moy ? -1 : 0));
  console.table(students);
});
