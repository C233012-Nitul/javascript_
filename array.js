let Name = ["mohammad", "ali", "nitul", 2, 5];
// console.log(Name)
// console.log(Name.length)
// console.log(Name[7])

Name.push("rakib");
//console.log(Name)

Name.pop();
//console.log(Name)

//0th index a push
Name.unshift("meme");
//console.log(Name)

//0th index a pop
Name.shift();
console.log(Name);

//kth index a push/pop - splice

Name.splice(3, 1, "NITULaa");
console.log(Name);

//slice (array ekta portion neya)
const a = Name.slice(1, 3);
console.log(a);
