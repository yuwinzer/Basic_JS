// we create class product, which can describe any product in a store
class product {
    
    constructor (id, name, color, cushion, size, price, image) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.cushion = cushion;
        this.size = size;
        this.price = price;
        this.image = image;
        product.instances.push(this);
    };

    // destroy instanse of a class
    destroy () {
        for (let i = 0; i < product.instances.length; i++) { 
            if (product.instances[i] == this) {
                product.instances.splice(i, 1);
            };
        };
    };

    static instances = []; // for listing all created instances of the class
};


function objectFromClassByGivenID (className, id) {
    for (let i = 0; i< className.instances.length; i++) {
        if (className.instances[i]['id'] == id) {
            return className.instances[i];
        };
    };
};


class catalog {
    constructor (items) {
        this.items = items;
    };

    allCatalogItemListing () {
        let itemList = [];
        let itemDescription = [];
        for (let item of this.items) {
            itemDescription.push(item.name);
            itemDescription.push(item.color);
            itemDescription.push(item.price);
            itemDescription.push(item.image);
            itemList.push(itemDescription);
            itemDescription = [];
        };
        return ('All available products: ' + '<br>' + itemList.join(' , <br>'));
    };

    // generate catalog in html
    catalogCreate () {
        let catalogList = document.createElement('div');
        catalogList.setAttribute('id','catalogList');

        for (let i of this.items) {
            let catalogListItem = document.createElement('p');
            let buyMeBtn = document.createElement('button')
            catalogListItem.setAttribute('id', i.id );
            catalogListItem.innerHTML = i.name + ', the price is: ' + i.price + '$' +
             '  <button id=' + i.id +
             ' name="btn" onclick="addToCart(objectFromClassByGivenID(product, id))">Buy</button>';
            catalogList.appendChild(catalogListItem);
        };

        return catalogList;
    };
};


// add item to cart after click Buy Button and recalc cart
function addToCart (item) {
    console.log('Добавлен продукт: ' + item.name + '. Цена: ' + item.price );
    new cartItem(item);
    var cart1 = new cart(cartItem.instances); //recalc cart 
    console.log(cart1.countCartPrice());
    cartContent.innerHTML = cart1.countCartPrice();
    cartBtnContent.innerHTML = 'Open cart [' + cartItem.instances.length + ']' //update cart button inner HTML
};


class catalogItem {
    constructor(x) {
        this.id = x.id;
        this.name = x.name;
        this.color = x.color;
        this.size = x.size;
        this.price = x.price;
        this.image = x.image;
        catalogItem.instances.push(this);
    };

    // destroy instanse of a class
    destroy () {
        for (let i = 0; i < catalogItem.instances.length; i++) { 
            if (catalogItem.instances[i] == this) {
                catalogItem.instances.splice(i, 1);
            };
        };
    };

    static instances = []; // for listing all created instances of the class
};


class cart {
    constructor (items) {
        this.items = items;
    };

    countCartPrice() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        let count = this.items.length;
        if (this.items.length == 0) {
            return "Корзина пустая"
        } 
        else {
            return "Всего товаров: " + count + ", на сумму " + this.items.reduce(reducer, 0) +
            " баксов"; // 0 - is initial Value
        }
    };
};


class cartItem {
    constructor (x) {
        this.name = x.name;
        this.price = x.price;
        cartItem.instances.push(this);
    };

    // destroy instanse of a class
    destroy () {
        for (let i = 0; i < cartItem.instances.length; i++) { 
            if (cartItem.instances[i] == this) {
                cartItem.instances.splice(i, 1);
            };
        };
    };

    static instances = []; // for listing all created instances of the class
};


const chair1 = new product(135, 'Chair 1', 'Gold', 'Nuri', '1/4 scale', 86, '/img/chair_1.jpg');
const chair2 = new product(25, 'Chair 2', 'Black', 'Velvet black', '1/4 scale', 100, '/img/chair_2.jpg');
const vaseStand1 = new product(175, 'Vase stand 1', 'Gold', null, '1/4 scale', 100, '/img/vase_stand_1.jpg');
const sofa1 = new product(3, 'Sofa 1', 'Black', 'Nuri', '1/4 scale', 160, '/img/sofa_1.jpg');

const catItemId1 = new catalogItem(chair1);
const catItemId2 = new catalogItem(chair2);
const catItemId3 = new catalogItem(vaseStand1);
const catItemId4 = new catalogItem(sofa1);

const catalog1 = new catalog([
    catItemId1,
    catItemId2,
    catItemId3,
    catItemId4]
);

var cart1 = new cart(cartItem.instances);  // empty cart at start after document load


let catDiv = document.getElementById('catalog');
// catDiv.innerHTML = catalog1.allCatalogItemListing();
catDiv.appendChild(catalog1.catalogCreate());


let cartContent = document.getElementById('cart');
console.log(cart1.countCartPrice());
cartContent.innerHTML = cart1.countCartPrice();

let cartBtnContent = document.getElementById('cartBtn');
cartBtnContent.innerHTML = 'Open cart [' + cartItem.instances.length + ']';


var modal = document.getElementById("cartModal"); // Get the modal
var btn = document.getElementById("cartBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

btn.onclick = function() {modal.style.display = "block"}; // When the user clicks on the button, open the modal
span.onclick = function() {modal.style.display = "none"}; // When the user clicks on <span> (x), close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // When the user clicks anywhere outside of the modal, close it
  };
};