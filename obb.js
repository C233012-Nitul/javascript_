let student = {
    Name : "nitul",
    id : "022",
    marks : {
        bangla : 57,
        eng : 89,
        math : 87,
        sci : 98
    }
}
let total = 0
let total_sub = 0
for(const i in student.marks) {
    total += student.marks[i]
    total_sub++
}
console.log(total, total_sub)
let av = total/total_sub
console.log(`average ${(total/total_sub).toFixed(5)}`)
console.log(av.toFixed(2))