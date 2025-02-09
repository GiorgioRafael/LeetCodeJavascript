//first try, did not work, dont know
/*
var isPowerOfTwo = function(n) {
    let inter = 999
    if(n === 1){
        return true
    }
    for(let i = 0; i < inter; i++){
        if(2^i == n){
            return true
        } else {
            return false
        }
    }
    
};
*/
//second try ask for ai to help
// ai give me this

var isPowerOfTwo = function(n) {
    return n > 0 && (Math.log2(n) % 1 === 0);
};

//didnt understand it, so ask for explanation

//"return n > 0"
// ensures that n is greater than 0 (all power of two numbers are > 0)
//"(Math.log2(n);" |math.log2 returns the number that should be the power
//  of 2."let example = math.log2(4)". example will be 2, because 2^2 = 4
// "% 1 === 0" % 1 will cut the int value, the rest of the code will "=== 0"
//  will compare the resulting value to 0, if it is zero, it means that its a power of two
//  simple but quite smart. dint know the method math.log2