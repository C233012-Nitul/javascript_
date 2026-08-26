const student = {
    name : "nitul",
    age : 25,
    address : "ctg"
}
const student1 = {
    name : "nitul2",
    age : 24,
    address : {
        city : "ctg",
        area : "lalkhan" 
    }
}

//old
const oldName = student.name

// new
const {age , name, address} = student
console.log(name)

//nested
const {name : studentname, address : {city, area}} = student1
console.log(city, studentname, name)


//arr des
const arr = ["blue", "red", "green"]
const [first, second, third] = arr

console.log(first)
const [ , , th] = arr

console.log(th)

const student2 = {
    name : "nitul2",
    age : 24,
    address : {
        city : "ctg",
        area : "lalkhan" 
    },
    hobbies : ["reading", "writing", "gardening"]
}
const {name : std, address : {city : aa}, hobbies : [firsthob]} = student2
console.log(std, aa, firsthob)