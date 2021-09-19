class item {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    };
};

let itemId1 = new item('chair1', 100);
let itemId2 = new item('chair2', 300);
let itemId3 = new item('sofa1', 300);

function countCartPrice(x) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    return x.reduce(reducer, 0); // 0 - is initial Value
};

let cart = [
    itemId1,
    itemId2,
    itemId3
];

console.log(countCartPrice(cart));