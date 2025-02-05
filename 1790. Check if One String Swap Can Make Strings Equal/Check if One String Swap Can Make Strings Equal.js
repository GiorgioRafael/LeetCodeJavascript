/*
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

LINK https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/?envType=daily-question&envId=2025-02-05

*/
function areAlmostEqual(s1, s2){
    let count = 0;
    let letraStr1;
    let letraStr2;
    let posicao1;
    let posicao2;
    let minLength = Math.min(s1.length, s2.length) //pega o valor da menor string(quantidade de caracteres)
    if(s1 == s2){
        return true
    } else {
        for(let i =0; i < minLength; i++){ //faz um loop 
            if (s1[i] !== s2[i]) {
                if (count === 0) {
                    letraStr1 = s1[i];
                    posicao1 = i;
                } else if (count === 1) {
                    letraStr2 = s1[i];
                    posicao2 = i;
                }
                count++;
            }
        }
    }
    if(count == 2){
            let temp = s1.split(''); // Converte a string s1 em um array de caracteres
            [temp[posicao1], temp[posicao2]] = [temp[posicao2], temp[posicao1]]; // Troca as letras de posição
            let novoArray = temp.join(''); // Converte o array de volta para uma string
            if(novoArray == s2){
                return true
            }
        
    }
    return false
    
}

/*
for(let i = 0; i < minLength; i++) { // Faz um loop até o comprimento da menor string
    if (s1[i] !== s2[i]) { // Verifica se os caracteres nas posições correspondentes são diferentes
        if (count === 0) { // Se é a primeira diferença encontrada
            letraStr1 = s1[i]; // Armazena o caractere de s1 na posição i
            posicao1 = i; // Armazena a posição da primeira diferença
        } else if (count === 1) { // Se é a segunda diferença encontrada
            letraStr2 = s1[i]; // Armazena o caractere de s1 na posição i
            posicao2 = i; // Armazena a posição da segunda diferença
        }
        count++; // Incrementa o contador de diferenças
    }
}
*/

//não tinha pensado na logica de fazer a primeira verificacao (count ==0) e a segunda verificacao separadamente, 
// ja que da no mesmo, as strings sao "iguais" entao e so armazenar o valor em referencia da segunda, depois trocar

//precisei de ajuda de ia para entender a logica da troca de posicoes, transformando em array e depois trocando as posicoes, depois voltan-
// -do a string e fazendo a comparação

// consegui a resolucao 0ms, to bem feliz