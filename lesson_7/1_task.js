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

    static instances = []; // for listing all created instances of the class
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
    create () {
        let catalogList = document.createElement('div');
        catalogList.setAttribute('id','catalogList');

        for (let i of this.items) {
            let catalogListItem = document.createElement('p');
            catalogListItem.setAttribute('id', i.id );
            catalogListItem.innerHTML = `<img src="${i.image}" alt="${i.name}" height="50"> 
            ${i.name}, the price is: ${i.price}$ 
            <button id=${i.id} 
            name="btn" onclick="addToCart(objectFromClassByGivenID(product, id))">Buy</button>`;
            catalogList.appendChild(catalogListItem);
        };

        return catalogList;
    };
};

function objectFromClassByGivenID (className, id) {
    for (let i = 0; i< className.instances.length; i++) {
        if (className.instances[i]['id'] == id) {
            return className.instances[i];
        };
    };
};

// add item to cart after click Buy (or '+') Button and recalc cart
function addToCart (item) {
    console.log('Добавлен продукт: ' + item.name);
    new cartItem(item);
    var cart1 = new cart(cartItem.instances); //recalc cart 
    // console.log(cart1.countCartPrice());
    cartContent.innerHTML = cart1.create();
    cartBtnContent.innerHTML = 'Open cart [' + cartItem.instances.length + ']' //update cart button inner HTML
};

// remove first item with given ID from cart after click '-' Button and recalc cart
function removeFromCart (item) {
    console.log('Убран продукт: ' + item.name);
    for (let i = 0; i < cartItem.instances.length; i++) {
        if (cartItem.instances[i]['id'] == item.id) {
            cartItem.instances.splice(i, 1);
            break;
        };
    };
    // console.log(cart1.countCartPrice());
    cartContent.innerHTML = cart1.create();
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


var addressField = {
    create : function () {
        let addressForm = document.createElement('div');
        addressForm.setAttribute('id','addressForm');

        let header = document.createElement('p');
        header.innerHTML = '<h3>Address form</h3>';
        addressForm.appendChild(header);

        let textarea = document.createElement('p');
        textarea.innerHTML = '<textarea id="address" name="address" autocomplete="address" maxlength="300" required></textarea>';
        addressForm.appendChild(textarea);

        let buttons = document.createElement('p');
        buttons.innerHTML = '<button onclick="addressField.btnBack()">Back</button> <button onclick="addressField.btnNext()">Next</button>';
        addressForm.appendChild(buttons);

        return addressForm.innerHTML;
    },

    btnNext : function () {
        var currentDiv = document.getElementById("cartAddress"); // Get the modal
        currentDiv.style.display = "none"
        var nextDiv = document.getElementById("cartComment"); // Get the modal
        nextDiv.style.display = "block"
    },
    
    btnBack : function () {
        var currentDiv = document.getElementById("cartAddress"); // Get the modal
        currentDiv.style.display = "none"
        var prevDiv = document.getElementById("cart"); // Get the modal
        prevDiv.style.display = "block"
    }
};


var commentField = {
    create : function () {
        let commentForm = document.createElement('div');
        commentForm.setAttribute('id','commentForm');

        let header = document.createElement('p');
        header.innerHTML = '<h3>Comment form</h3>';
        commentForm.appendChild(header);

        let textarea = document.createElement('p');
        textarea.innerHTML = '<textarea id="comment" name="comment" autocomplete="comment" maxlength="300" required></textarea>';
        commentForm.appendChild(textarea);

        let buttons = document.createElement('p');
        buttons.innerHTML = '<button onclick="commentField.btnBack()">Back</button>';
        commentForm.appendChild(buttons);

        return commentForm.innerHTML;
    },

    
    btnBack : function () {
        var currentDiv = document.getElementById("cartComment"); // Get the modal
        currentDiv.style.display = "none"
        var prevDiv = document.getElementById("cartAddress"); // Get the modal
        prevDiv.style.display = "block"
    }
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

    // generate cart content in html
    create () {
        let cartList = document.createElement('div');
        cartList.setAttribute('id','cartList');

        let header = document.createElement('p');
        header.innerHTML = '<h3>Cart form</h3>';
        cartList.appendChild(header);

        // get a list of items with unique id
        let idList = [];
        for (let i of cartItem.instances) {
            idList.push(i.id);
        };
        // let uniqueId = idList.filter((item, i, ar) => ar.indexOf(item) === i);
        let uniqueCartItems = [];
        let map = new Map();
        
        for (let item of cartItem.instances) {
            let count = 0;
            for (let countItem of cartItem.instances) {
                if (item.id == countItem.id) {
                    count++;
                };
            };
            if (!map.has(item.id)) {
                 map.set(item.id, true); // set any value to Map        
                 uniqueCartItems.push({            
                     id: item.id,            
                     name: item.name,
                     price: item.price,
                     image: item.image,
                     count: count
                 });    
             };
        };
                
        for (let i of uniqueCartItems) {
            let cartListItem = document.createElement('p');
            cartListItem.setAttribute('id', i.id );
            cartListItem.innerHTML = `<img src="${i.image}" alt="${i.name}" height="50"> 
            ${i.name}, the price is: ${i.price}$, Quantity: ${i.count}
            <button id=${i.id} name="btnAdd" onclick="addToCart(objectFromClassByGivenID(product, id))">+</button>
            <button id=${i.id} name="btnDel" onclick="removeFromCart(objectFromClassByGivenID(cartItem, id))">-</button>`;
             cartList.appendChild(cartListItem);
        };



        let tempCountPriceVar = document.createElement('p');
        tempCountPriceVar.setAttribute('id', 'cartOveralInfo' );
        tempCountPriceVar.innerHTML = cart1.countCartPrice();
        cartList.appendChild(tempCountPriceVar);
        
        let buttons = document.createElement('p');
        buttons.innerHTML = '<button onclick="cart1.btnNext()">Next</button>';
        cartList.appendChild(buttons);

        return cartList.innerHTML;
    };

    btnNext () {
        var currentDiv = document.getElementById("cart");
        currentDiv.style.display = "none"
        var nextDiv = document.getElementById("cartAddress"); 
        nextDiv.style.display = "block"
    }
};


class cartItem {
    constructor (x) {
        this.name = x.name;
        this.price = x.price;
        this.id = x.id;
        this.image = x.image;
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




const chair1 = new product(135, 'Chair 1', 'Gold', 'Nuri', '1/4 scale', 86, 'img/chair_1.jpg');
const chair2 = new product(25, 'Chair 2', 'Black', 'Velvet black', '1/4 scale', 100, 'img/chair_2.jpg');
const vaseStand1 = new product(175, 'Vase stand 1', 'Gold', null, '1/4 scale', 100, 'img/vase_stand_1.jpg');
const sofa1 = new product(3, 'Sofa 1', 'Black', 'Nuri', '1/4 scale', 160, 'img/sofa_1.jpg');

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
catDiv.appendChild(catalog1.create());


let cartContent = document.getElementById('cart');
console.log(cart1.countCartPrice());
cartContent.innerHTML = cart1.create();

let cartAddressContent = document.getElementById('cartAddress');
cartAddressContent.innerHTML = addressField.create();

let cartAddressComment = document.getElementById('cartComment');
cartAddressComment.innerHTML = commentField.create();

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