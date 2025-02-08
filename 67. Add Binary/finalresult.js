function addBinary(a, b){
    const decimal1 = BigInt("0b" + a);
    const decimal2 = BigInt("0b" + b);
    let soma = decimal1+decimal2;
    
    return soma.toString(2);
}