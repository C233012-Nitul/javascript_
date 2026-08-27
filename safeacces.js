let user = {
    name : "nitul", 
    add : {
        area : "lalkhan"
    }
}
let user2 = {
    name : "ali"
}
//optional chaining ?
console.log(user?.add?.area)
console.log(user2?.add?.area)

// nulish collescing ??

console.log(user2?.add?.city ?? "baggona")