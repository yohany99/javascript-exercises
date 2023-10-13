const findTheOldest = function(array) {
    // return array.map(item => ((item.yearOfDeath) ? item.yearOfDeath - item.yearOfBirth : new Date().getFullYear() - item.yearOfBirth))
    //             .reduce(function(oldest, curr) {
    //                 if (oldest > curr) {
    //                     return oldest;
    //                 } else {
    //                     return curr;
    //                 }
    //             })
    return array.reduce(function(accum, person) {
        if (((accum.yearOfDeath) ? accum.yearOfDeath : new Date().getFullYear()) - accum.yearOfBirth < ((person.yearOfDeath) ? person.yearOfDeath : new Date().getFullYear())- person.yearOfBirth) {
            return person;
        } else {
            return accum;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
