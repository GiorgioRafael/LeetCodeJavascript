/*
this is the trial and error
final result is in final result.js
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/


//separar em um array de chars
//fazer uma verificação logica 
// converter os valores em array da string para numeros
let string = "IV"
var romanToInt = function(s) {
    let resultadoFinal = 0;
    let inputConvertido = s.split('');
//rodar um case para cada casa do array, convertendo para o valor referente

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
//conversao dos valores para negativo
for(let j = 0; j < inputConvertido.length -1; j++){
    if(inputConvertido[j] < inputConvertido[j + 1]){
        inputConvertido[j] *= -1;
    }
}
//soma dos valores
for(let i = 0; i < inputConvertido.length; i++){
    resultadoFinal += inputConvertido[i]
}
console.log(resultadoFinal)
return resultadoFinal
};
romanToInt(string)
/*
Symbol       Value
0 I             1
1 V             5
2 X             10
3 L             50
4 C             100
5 D             500
6 M             1000
*/