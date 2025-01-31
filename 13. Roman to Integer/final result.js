//here is the formatted code with the most optimal solution i found
// runtime = 4ms (Beats 91.72%)

var romanToInt = function(s) {
    let resultadoFinal = 0;
    let inputConvertido = s.split('');
for(let i = 0; i < inputConvertido.length; i++){
    switch(inputConvertido[i]){
        case "I":
        inputConvertido[i] = 1
        break;
        case "V":
        inputConvertido[i] = 5
        break;
        case "X":
        inputConvertido[i] = 10
        break;
        case "L":
        inputConvertido[i] = 50
        break;
        case "C":
        inputConvertido[i] = 100
        break;
        case "D":
        inputConvertido[i] = 500
        break;
        case "M":
        inputConvertido[i] = 1000
        break;
    };
}
for(let j = 0; j < inputConvertido.length -1; j++){
    if(inputConvertido[j] < inputConvertido[j + 1]){
        inputConvertido[j] *= -1;
    }
}
for(let i = 0; i < inputConvertido.length; i++){
    resultadoFinal += inputConvertido[i]
}
return resultadoFinal
};
