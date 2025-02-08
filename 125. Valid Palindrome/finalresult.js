let isPalindrome = function(x) {
    let xInvertido = ''
    let strArr = x.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for (let i = strArr.length - 1; i >= 0; i--) {
        xInvertido = xInvertido+strArr[i];
    }
    if(xInvertido === strArr){
        return true
    } else {
        return false
    }
};
