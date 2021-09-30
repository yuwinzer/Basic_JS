function numDescript(x) {
    
        let string = x.toString();
        let arr = string.split('');
        let numb1 = {};
        switch (arr.length) {
            case 1:
                numb1 = {'единицы': arr[0], 'десятки': 0, 'сотни': 0};
                break;
            case 2:
                numb1 = {'единицы': arr[1], 'десятки': arr[0], 'сотни': 0};
                break;
            case 3:
                numb1 = {'единицы': arr[2], 'десятки': arr[1], 'сотни': arr[0]};
                break;
            default:
                console.log('Вы ввели слишком большое число')
        };
    return numb1;
    };



console.log(numDescript(312));
console.log(numDescript(1));
console.log(numDescript(4335));
console.log(numDescript(15));