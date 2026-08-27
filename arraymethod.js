let fruits = ["apples", "mango", "grape", "banana"]

let newFruits = fruits.forEach((f, idx)=>{//foreach cant return
    console.log(`${idx + 1} -> ${f}`)
})
// console.log(newFruits)

let newFruites = fruits.map((f, idx) => {
    return `${idx + 1} -> ${f}`
})
console.log(newFruites)

//map single line a return lage na
let newFruites2 = fruits.map((f) => f.toUpperCase())
console.log(newFruites2)

let smallFruits = newFruites2.map((f) => f.toLocaleLowerCase())
console.log(smallFruits)

let customFruites = fruits.filter((f) => f.length > 5)
console.log(customFruites)