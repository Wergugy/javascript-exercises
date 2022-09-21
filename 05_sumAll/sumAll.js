const sumAll = function (a, b) {

    if ((Number.isInteger(a)) && (Number.isInteger(b)) && (a + b) && (a > 0) && (b > 0)) {
        if (a < b) {
            let sum = a - 1;
            for (a; a <= b; ++a) {
                sum += a;
            }
            return sum;
        }
        else if (b < a) {
            let sum = b - 1;
            for (b; b <= a; ++b) {
                sum += b;
            }
            return sum;
        }
    } 
    else {return 'ERROR'}
}

// Do not edit below this line
module.exports = sumAll;
