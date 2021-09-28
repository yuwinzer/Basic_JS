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

    // itemGenerate () {
    //     let catItemDiv = document.createElement('div')
    //     catItemDiv.setAttribute('id','catItemDiv')
    //     for (let i=0; i<=this.items.length; i++) {
    //         catalogList.innerHTML = catItemDiv;
    //     };
    //     };

    catalogCreate () {
        let catalogList = document.createElement('div');
        catalogList.setAttribute('id','catalogList');

        for (let i of this.items) {
            let catalogListItem = document.createElement('p');
            let buyMeBtn = document.createElement('button')
            catalogListItem.setAttribute('id', i.id );
            // catalogListItem.innerHTML = i.name + buyMeBtn;
            catalogListItem.innerHTML = i.name + ', the price is: ' + i.price + '$' +
             '  <button id='+i.id+' name="btn" onclick="addToCart(this)">Buy</button>';

            
            catalogList.appendChild(catalogListItem);
        };

        return catalogList;
    };


};

// we create class cart_item for catalog items
class catalog_item {
    constructor(x) {
        this.id = x.id;
        this.name = x.name;
        this.color = x.color;
        this.size = x.size;
        this.price = x.price;
        this.image = x.image;
        catalog_item.all.push(this);
    };

    destroy() {
        let i = catalog_item.all.indexOf(this);
        catalog_item.all.splice(i, 1);
    };
    static all = [];
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


class cart_item {
    constructor (x) {
        this.name = x.name;
        this.price = x.price;
    };
};




function addToCart (item) {
    console.log(item.name);
};

const chair1 = new product(135, 'Chair 1', 'Gold', 'Nuri', '1/4 scale', 86, '/img/chair_1.jpg');
const chair2 = new product(25, 'Chair 2', 'Black', 'Velvet black', '1/4 scale', 100, '/img/chair_2.jpg');
const vaseStand1 = new product(175, 'Vase stand 1', 'Gold', null, '1/4 scale', 100, '/img/vase_stand_1.jpg');
const sofa1 = new product(3, 'Sofa 1', 'Black', 'Nuri', '1/4 scale', 160, '/img/sofa_1.jpg');


const catItemId1 = new catalog_item(chair1);
const catItemId2 = new catalog_item(chair2);
const catItemId3 = new catalog_item(vaseStand1);
const catItemId4 = new catalog_item(sofa1);


const catalog1 = new catalog([
    catItemId1,
    catItemId2,
    catItemId3,
    catItemId4]
);

const cart1 = new cart();

let catDiv = document.getElementById('catalog');
// catDiv.innerHTML = catalog1.allCatalogItemListing();
catDiv.appendChild(catalog1.catalogCreate());


let cartContent = document.getElementById('cart');
console.log(cart1.countCartPrice());
cartContent.innerHTML = cart1.countCartPrice();


// Get the modal
var modal = document.getElementById("cartModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

