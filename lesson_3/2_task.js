let cart = [
    ["Кресло", 100],
    ["Стул", 80],
    ["Стол", 90]
]

function countCartPrice(x) {
    sum = 0;
    for (i = 0; i < x.length; i++) {
        sum += parseInt(x[i][1]);
    };
    return sum;
};

console.log(countCartPrice(cart));