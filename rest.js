
function add(...numbers){// sob gula value array akare gese
    let total = 0
    for(const i of numbers) {
        total += i
    }
    return total
}
const ans = add(1, 2, 3, 4, 5, 5, 6)
//console.log(ans)
const obj = {
    name : "nitul",
    age : 24,
    add : "ctg",
    job : "dev"
}
const {name, ...remaining} = obj// sob alada alada korte pari
//console.log(remaining)
const arr = [
    1, 8, 100, 200
]
const [, , ...rest1] = arr
//console.log(rest1)


function ok(one, ...rem) {
    console.log(one, rem)
}

console.log(ok("first", 1, 2, 3, 4, 5))