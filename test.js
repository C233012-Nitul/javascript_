let product = [
  {
    id: 1,
    title: "mouse",
    price: 500,
    catagory: "accessories",
    instock: true,
  },
  {
    id: 2,
    title: "keyboard",
    price: 1200,
    catagory: "accessories",
    instock: false,
  },
  {
    id: 3,
    title: "laptop",
    price: 55000,
    catagory: "computer",
    instock: true,
  },
  {
    id: 4,
    title: "HEadphone",
    price: 1500,
    catagory: "accessories",
    instock: true,
  },
  {
    id: 5,
    title: "monitor",
    price: 8000,
    catagory: "display",
    instock: true,
  },
];

let res = product
  ?.filter((m) => m.instock === true)
  ?.sort((a, b) => a.price - b.price)
  ?.map((m) => `${m.title} -> ${m.price}`)
console.log(res)
let total = product?.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0)
console.log(`total ${total}`)
