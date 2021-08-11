var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    if (x < 10) {
        return true
    }
 
    let string = x.toString()
    let reverse = x.toString().split('').reverse().join("")

    return string === reverse
};

console.log(isPalindrome(121121))