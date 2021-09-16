let cart = [
    ["Кресло", 100],
    ["Стул", 80],
    ["Стол", 90]
]

// variant 1
// function countCartPrice(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         sum += parseInt(x[i][1]);
//     };
//     return sum;
// };

//variant 2
// function countCartPrice(x) {
//     let sum = 0;
//     for (let i of x) {
//         sum += i[1];
//     };
//     return sum;
// };

//variant 3


function countCartPrice(x) {
    let initialValue = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue[1];
    return x.reduce(reducer, initialValue);
};



console.log(countCartPrice(cart));