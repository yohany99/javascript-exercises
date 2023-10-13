const removeFromArray = function(array, ...args) {
    // const res = [];
    // for (const arg of args) {
    //     const index = array.indexOf(arg);
    //     if (index !== -1) {
    //         array.splice(index, 1);
    //     }
    // }
    // return array;
    return array.filter(val => !args.includes(val))

};

// Do not edit below this line
module.exports = removeFromArray;
