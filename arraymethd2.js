let fruit = ["apple", "mango", "orange", "banana", "grape"];

let newFruit = fruit.find((f) => f.length > 5);

console.log(newFruit);
const student = [
  {
    name: "nitul",
    marks: 87,
  },
  {
    name: "ali",
    marks: 78,
  },
  {
    name: "sakib",
    marks: 91,
  },
];
let newS = fruit.includes("mango");
//some condition true hoile true return
let newStd = student.some((f) => f.marks > 80);
console.log(newStd);

//sobai true hoile
let newStd2 = student.every((f) => f.marks > 80);
console.log(newStd2);
