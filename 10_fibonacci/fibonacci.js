const fibonacci = function(num) {
    num = +num;
    if (num < 0) {
        return "OOPS";
    }
    prev = 1;
    curr = 1;
    if (num <= 2) {
        return curr;
    }
    num -= 2;
    while (num) {
        temp = curr;
        curr += prev;
        prev = temp;
        num--;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
