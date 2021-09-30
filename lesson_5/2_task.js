class product {
    constructor (id, name, color, cushion, size, price) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.cushion = cushion;
        this.size = size;
        this.price = price
    };
};


class cart_item {
    constructor (x) {
        this.name = x.name;
        this.price = x.price;
    };
};


class cart {
    constructor (items) {
        this.items = items;
    };

    countCartPrice() {
        if (this.items != null) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        let count = this.items.length;
        return "Всего товаров: " + count + ", на сумму " + this.items.reduce(reducer, 0) + " баксов"; // 0 - is initial Value
        } else {return "Корзина пустая"};
    };
};


const chair1 = new product(135, 'Chair 1', 'Gold', 'Nuri', '1/4 scale', 86);
const chair2 = new product(25, 'Chair 2', 'Black', 'Velvet black', '1/4 scale', 100);
const vaseStand1 = new product(135, 'Vase stand 1', 'Gold', null, '1/4 scale', 100);


const itemId1 = new cart_item(chair1);
const itemId2 = new cart_item(chair2);
const itemId3 = new cart_item(vaseStand1);


const cart1 = new cart([itemId1, 
                        itemId2,
                        itemId3]);


const cart2 = new cart();


let cartContent = document.getElementById('cart_div');

// filled cart:
console.log(cart1.countCartPrice());
cartContent.innerHTML = cart1.countCartPrice();

//empty cart:
console.log(cart2.countCartPrice());
// cartContent.innerHTML = cart2.countCartPrice(); 


