const fibonacci = function(iterN) { 
        if (iterN < 0) return 'OOPS';
        const golden = 1.618034
        return Math.floor(((golden ** iterN) - ((1 - golden) ** iterN))/(Math.sqrt(5)));
};

// Do not edit below this line
module.exports = fibonacci;
