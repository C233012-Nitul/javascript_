let marks = [40, 55, 70, 38, 87, 76]
let max = marks[0];
for(let i = 0; i < marks.length; i++) {
    if(marks[i] >= max) {
        max = marks[i];
    }
}
//console.log(max)
let sum = 0
// for(let mark of marks) {
//     sum += mark
// }
for(let mark in marks) {
    sum += marks[mark]
}
//console.log(sum)
//console.log(sum / marks.length)
let rmarks =[]
for(let i = marks.length - 1; i >= 0; i--) {
    rmarks.push(marks[i])
}
// for(let i of rmarks) {
//     console.log(i)
// }
console.log(rmarks)