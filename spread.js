let arr = ["red", "blue", "green", 2 , 5]

let newArr = [...arr, "purple"]//ager array ta copy kore extra jinis chaile add korte parbo

console.log(arr, newArr)

const personalInfo = {
    name : "samad",
    age : 23
}
const contactInfo = {
    email: "samad@gmail.com",
    phone : "0178888"
}
const newobj = {
    ...personalInfo, 
    contactInfo, 
    arr, 
    zip : "6000"
}
console.log(newobj)