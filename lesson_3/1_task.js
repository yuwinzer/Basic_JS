﻿i = -1;
rangeArr = [];
while (i < 100) {
    i++;
    rangeArr.push(i);
    if (rangeArr.length < 2) {
        continue;
        //because the prime number should be divisible not less than by 2 numbers - by itself and by 1
    };

    tempArr = [];
    count = 0;
    lengthTempArr = rangeArr.length;
    for (n = 1; n < lengthTempArr + 1; n++) {
        if (i % n == 0) {
            count++;
        };
    };
    if (count == 2) {
        console.log(i);
        //because the prime number should have ONLY 2 dividers with zero remainder
    };
};



