let user = {
    name : "nitul",
    age : 25,
    add : {
        city : "ctg",
        area : "lalkhan",
        zip : 4000
    }
}
//console.log(user["add"]["area"])
//console.log(user.add.zip)
let entry = Object.entries(user)
//console.log(entry)
// console.log(entry[0])
// console.log(entry[0][1])
let arr = [
    {
        name : "me",
        age : 24,
        id : "01"
    },
    {
        name : "me2",
        age : 25,
        id : "02"
    },
    {
        name : "me3",
        age : 24,
        id : "03",
        add : {
            area : "lala",
            zip : 300
        }
    }
]
arr[2].add.zip = 0;
console.log(arr[2].add.zip)