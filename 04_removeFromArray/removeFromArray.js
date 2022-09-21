const removeFromArray = function(array, ...cuts) {
    const passed = array.filter((value) => {
        for (const cut of cuts) {
            if (value === cut) return (1 === 0);
            else continue;
        }
        return value;
    });
    return passed;
};

// Do not edit below this line
module.exports = removeFromArray;
