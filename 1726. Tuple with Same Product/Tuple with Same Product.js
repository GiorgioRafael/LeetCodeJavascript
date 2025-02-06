/*

Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

 

Example 1:

Input: nums = [2,3,4,6]
Output: 8
Explanation: There are 8 valid tuples:
(2,6,3,4) , (2,6,4,3) , (6,2,3,4) , (6,2,4,3)
(3,4,2,6) , (4,3,2,6) , (3,4,6,2) , (4,3,6,2)
Example 2:

Input: nums = [1,2,4,5,10]
Output: 16
Explanation: There are 16 valid tuples:
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,5,4)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)

//gera um array 2d com todas as permutacoes possivel (!arr.length)
//encontrar grupos de numeros distintos, que retornem a * b = c * d
//sempre 4 numeros
// if(nums[0]*nums[1] = nums[2]* nums[3]){return true}
//gerar combinações de 4 numeros
*/
nums = [2,3,4,6]
    
function tupleSameProduct(nums){
   //funcao de separar todas as combinacoes possiveis de x(4) numeros
   function getCombinations(arr, size) {
    const result = [];
    function combine(start, comb) {
        if (comb.length === size) {
            result.push(comb);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            combine(i + 1, [...comb, arr[i]]);
        }
    }
    combine(0, []);
    return result;
}
function getPermutations(arr) { //funcao para conseguir as permutacoes do array
    if (arr.length === 0) return [[]]; //se for vazio retorna nada
    let result = []; //variavel para armazenar o resultado
    for (let i = 0; i < arr.length; i++) { //loop do tamanho do array
        let rest = arr.slice(0, i).concat(arr.slice(i + 1)); //pega todos os valores menos o atual e joga no array rest
        let perms = getPermutations(rest); // chama recursivamente a funcao, gerando as permutacoes ate chamar []
        //ex: arr[1,2,3] i=0, chamara [2,3] [3] [] em sequencia.
        for (let perm of perms) { //percorre cada elemento do perms e atribui a perm em cada iteração
            result.push([arr[i], ...perm]); //cada iteracao adiciona o valor atual (arr[i]) no inicio da iteracao atual(o valor que estava faltando)
        }
    }
    return result;
}

function getAll4Permutations(arr) {
    let combinations = getCombinations(arr, 4);  // Gera todas as combinações de 4 números
    let allPermutations = [];
    
    for (let combination of combinations) {
        let perms = getPermutations(combination); // Gera permutações para cada combinação
        allPermutations.push(...perms);  // Adiciona as permutações ao resultado final
    }
    
    return allPermutations;
}
let allPermutations = getAll4Permutations(nums)
let contador = 0;
//fazer verificacao
for(let subArray of allPermutations){
    if(subArray[0] *subArray[1] === subArray[2] *subArray[3]){
        contador++
    }
}
return contador;
}


//funcao final que utiliza as duas funcoes anteriores para fazer permutacao de 4 numeros



//verificar se a*b === c*d