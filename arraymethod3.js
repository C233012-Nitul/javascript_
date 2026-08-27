let products = [
    {title : "mouse", price : 500, instock : true},
    {title : "keyboard", price : 5500, instock : false},
    {title : "monitor", price : 15000, instock : true},
    {title : "headphone", price : 5000, instock : false}
]
//reduce method-> acc---value gula
//current hocche iterate korbe array tate
let totalPrice = products.reduce((acc, current) => {
    return (acc += current.price)
}, 0)

console.log(totalPrice)

//des sort
let sortedin = [3, 2, 5, 1, 5].sort((a, b)=> b - a)
//incres
let sortedde = [3, 2, 5, 1, 5].sort((a, b)=> a - b)

let sorted2 = products.sort((a, b) => b.price - a.price)
console.log(sorted2)

//filter kore 
let estPrice = products.filter((p) => p.instock == true).reduce((acc, cur) =>{
    return (acc += cur.price)
}, 0)
console.log(estPrice)