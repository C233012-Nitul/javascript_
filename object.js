const obj = {
    Name : "nitul",
    age : 23,
    city : "ctg"
}
const {age, city, name} = obj

const ageCheck = () =>{
    if (age > 18) {
        console.log("Voter")
    } else{
        console.log("not")
    }
}
ageCheck()
obj.age = 15
ageCheck()
console.log(obj)

