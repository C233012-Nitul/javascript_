function total (price, quantity = 10) {
    const totalPrice = price * quantity
    return totalPrice
}
const spend = total(12)
let have = 1000 - spend
//console.log(spend, have)
function sayName(name) {
    console.log(`hello ${name}`)
}
sayName("NITUL")