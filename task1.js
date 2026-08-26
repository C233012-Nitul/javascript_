let cart = [
    { naame : "shirt", price : 1200, quantity : 2},
    { naame : "pants", price : 1800, quantity : 1},
    { naame : "socks", price : 200, quantity : 3} 
]
let count = 0, sum = 0;
for(const i in cart) {
    count += cart[i].quantity
    sum += (cart[i].price*cart[i].quantity)
}
console.log(`total quantity : ${count} \nTotal price : ${sum}`)