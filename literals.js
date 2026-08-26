let price = 500;
let quantity = 3;
console.log(`Total price : ${price * quantity} Taka`)
//function diye

function getDiscount(price) {
    return price * 0.1
}
console.log(
    `Your Discount : ${getDiscount(price)}
Total biil ${price * quantity - getDiscount(price)}`)

///
let stock = 19
console.log(`Status : ${stock > 0 ? "in stock " + " " + stock : "Out of stock"}`)