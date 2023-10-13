const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    let res = 0;
    let temp = num1;
    num1 = Math.min(num1, num2);
    num2 = Math.max(temp, num2);
    for (let i = num1; i <= num2; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
