// we create class product, which can describe any product in a store
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

// we create class cart_item for cart items
class cart_item {
    constructor (x) {
        this.name = x.name;
        this.price = x.price;
    };
};

// we create class cart_item for catalog items
class catalog_item {
    constructor(x) {
        this.name = x.name;
        this.color = x.color;
        this.size = x.size;
    };
};

const chair1 = new product(135, 'Chair 1', 'Gold', 'Nuri', '1/4 scale', 86);
const chair2 = new product(25, 'Chair 2', 'Black', 'Velvet black', '1/4 scale', 100);
const vaseStand1 = new product(135, 'Vase stand 1', 'Gold', null, '1/4 scale', 100);

const itemId1 = new cart_item(chair1);
const itemId2 = new cart_item(chair2);
const itemId3 = new cart_item(vaseStand1);

class cart {
    constructor (items) {
        this.items = items;
    };

    get cartPrice() {
        return this.countCartPrice();
      };
    
    countCartPrice() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        return this.items.reduce(reducer, 0); // 0 - is initial Value
    };
};

const cart1 = new cart([itemId1, 
                        itemId2,
                        itemId3]);


const catItemId1 = new catalog_item(chair1);
const catItemId2 = new catalog_item(chair2);
const catItemId3 = new catalog_item(vaseStand1);


class catalog {
    constructor (items) {
        this.items = items;
    };

    allCatalogItemListing () {
        let nameArray = [];
        let colorArray = [];
        for (let item of this.items) {
            nameArray.push(item.name);
            colorArray.push(item.color); //later can add filter method for getting only unique colors
        };
        console.log('all names of our items: ' + nameArray.join(', '));
        console.log('now awailable colors: ' + colorArray.join(', '));
    };
};

const catalog1 = new catalog([
    catItemId1,
    catItemId2,
    catItemId3]);

console.log(cart1.countCartPrice());
catalog1.allCatalogItemListing();

