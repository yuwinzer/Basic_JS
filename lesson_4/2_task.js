class item {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    };
};

const itemId1 = new item('chair1', 200);
const itemId2 = new item('chair2', 300);
const itemId3 = new item('sofa1', 300);


class cart {
    constructor (items) {
        this.items = items;
    };

    countCartPrice() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        return this.items.reduce(reducer, 0); // 0 - is initial Value
    };
};

const cart1 = new cart([itemId1, 
                        itemId2,
                        itemId3]);


console.log(cart1.countCartPrice());