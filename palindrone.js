var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let string = x.toString()
    let reverse = x.toString().split('').reverse().join("")

    if (string === reverse) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(121121))