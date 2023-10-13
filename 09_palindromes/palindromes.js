const palindromes = function (string) {
    let left = 0;
    newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let right = newString.length - 1;
    while (left <= right) {
        if (newString[left] !== newString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
