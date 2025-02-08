//converter para array
//converter para decimal
// somar
//converter para binario

function addBinary(a, b){
    const decimal1 = BigInt("0b" + a);
    const decimal2 = BigInt("0b" + b);
    let soma = decimal1+decimal2;
    
    return soma.toString(2);
}

/*
initial approach:
function addBinary(a, b){
    const decimal1 = parseInt(a, 2); 
    const decimal2 = parseInt(b, 2); 
    let soma = decimal1+decimal2;
    
    return soma.toString(2);
}
didnt work because javascript use 64bit floating points for representing numbers, and leetcode tests your code with much higher numbers,
when i tried it tested with the following values

let a ="10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

let b="110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

and the output lost precision due to it being 150+ bits longs


notes:
didnt know that parseInt can convert different bases to decimal
didnt know js was not precise with big data.
max number: 9007199254740992
*/