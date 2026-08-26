const Names = ["name1", "name2", "name3"]

const namemap = Names.map((i) => console.log(i)) 
const namefilter = Names.filter((i) => i !== "name2" ? console.log(i) : console.log("no"))
Names.forEach((i) => {
    console.log(i)
})
for(let i = 0; i < Names.length; i++){
    console.log(i)
} 
for(let i = 0; i < 5; i++) {
    console.log(`count: ${i}`);
}
for(let i = 0; i < Names.length; i++) {
    console.log(`Name ${i} : ${Names[i]}`)
}
let i = 0;
while(i < Names.length) {
    console.log(`Name ${i} : ${Names[i]}`)
    i++;
}