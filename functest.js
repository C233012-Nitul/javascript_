function isValidEmail(email) {
    return email.includes("@") && email.includes(".")
}
function calculateDiscount(itemPrice, discount){
    let x = (itemPrice * discount) / 100;
    return itemPrice - x
}
function finalBil(itemPrice, vat){
    let x = (itemPrice * vat) / 100
    return itemPrice + x
}
function formatBill(itemPrice) {
    return `${itemPrice.toFixed(2)} BDT`
}
function capitalized(str) {
    if(!str) return ""
    return str.charAt(0).toUpperCase() + str.slice(1)
}
function processOrder(user, itemPrice, discountCode) {
    console.log(`\t\t-----processing Order for ${user}------`)
    if(!isValidEmail(user.email)) {
        console.log("\t\terror email")
        return
    }
    let currentPrice = itemPrice
    if(discountCode == "x100") {
        currentPrice = calculateDiscount(itemPrice, 20)
        console.log("\t\t20% Discount Applied")
    }
    let totalBill = finalBil(currentPrice, 15)
    console.log("\t\tFinal Amount TO Pay : ", formatBill(totalBill))
    console.log("\t\tOrder Successfull for ", capitalized(user.name))
}
const user = {
    name : "nitul",
    email : "nitul@gmail.com",
}
processOrder(user, 1000, "x100")