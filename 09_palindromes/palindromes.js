const palindromes = function (string) {
        const array1 = string.toLowerCase().split('');
        const filArray = array1.filter((letter) => {
                if ((letter !== ',') && (letter !== '!') &&
                 (letter !== '.') && (letter !== ' ')) return true;
                else return false;
        });
        
        const revArray = filArray.reverse();
        //return revArray;
       const result = [];
        for (let i = 0, l = filArray.length; i < l; i++) {
               if (filArray[i] === revArray[i]) {
                result.push(1);
               }
               else result.push(0);
        };

       return result.reduce((a,b) => {
                const isPal = a + b;
                return !!(isPal);
        });
        
};

// Do not edit below this line
module.exports = palindromes;
