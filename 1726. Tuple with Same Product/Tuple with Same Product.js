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
//RESOLUCAO============================================================================================================================

//apos tirar duvidas com o chatgpt
// cheguei na conclusao que seria mais facil outra abordagem, de verificacao de duplas
// para verificar duplas, preciso armazenar elas em um mapa hash


//fazer a verificacao se os numeros a,b e c,d são iguais é mais simples, porem deixa o codigo mais lento, a solução
// ideal é verificar antes se um numero aparece de um lado, nao pode aparecer do outro, que deixa o codigo mais rapido 

function tupleSameProduct(nums) {
    let productMap = new Map(); // Mapa para armazenar os produtos
    let contador = 0;
    // Percorrer todos os pares (i, j) e calcular o produto
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];  // Calcula o produto

            // Se o produto já existe no mapa, precisamos verificar se os números são distintos
            if (productMap.has(product)) {
                // Pegar as combinações anteriores que deram esse produto
                let combinations = productMap.get(product);

                // Verificar se os números (i, j) não se repetem com combinações anteriores
                for (let [a, b] of combinations) {
                    if (a !== i && a !== j && b !== i && b !== j) {
                        contador += 8;  // Se são combinações válidas, incrementar o contador
                        //por que 8? pois cada combinaçao valida tem 8 mudanças de possiveis.
                    }
                }
            }

            // Armazena a combinação de números com o produto no mapa
            if (productMap.has(product)) {
                productMap.get(product).push([i, j]);
            } else {
                productMap.set(product, [[i, j]]);
            }
        }
    }

    return contador;  // Retorna o número de combinações válidas
}