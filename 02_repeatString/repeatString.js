const repeatString = function(string, num) {
    let finString = "";
    if(num < 0 ) return 'ERROR'
    while (num >= 1) {
        finString = finString + string;
        --num;
    }
    return finString;
};

// Do not edit below this line
module.exports = repeatString;
