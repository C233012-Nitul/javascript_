const obj = {
    Name : "nitul",
    age : 23,
    city : "ctg"
}
console.log(obj["Name"])

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
//console.log(obj)
delete obj.city
console.log(obj)
obj.city ={
    city: "ctg",
    area : "lalkhan"
};

console.log(obj)

//sob entries 
console.log(Object.entries(obj))

//key dekte
console.log(Object.keys(obj))