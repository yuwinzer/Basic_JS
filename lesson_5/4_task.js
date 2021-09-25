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
        return 'All available products: ' + '<br>' + nameArray.join(',<br>');
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
const vaseStand1 = new product(175, 'Vase stand 1', 'Gold', null, '1/4 scale', 100);
const sofa1 = new product(3, 'Sofa 1', 'Black', 'Nuri', '1/4 scale', 160);


const catItemId1 = new catalog_item(chair1);
const catItemId2 = new catalog_item(chair2);
const catItemId3 = new catalog_item(vaseStand1);
const catItemId4 = new catalog_item(sofa1);


const catalog1 = new catalog([
    catItemId1,
    catItemId2,
    catItemId3,
    catItemId4]);


let catDiv = document.getElementById('catalog');
catDiv.innerHTML = catalog1.allCatalogItemListing();