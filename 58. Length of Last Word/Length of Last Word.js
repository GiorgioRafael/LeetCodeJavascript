/*
58. Length of Last Word
Easy
Topics
Companies
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.



Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
*/
var lengthOfLastWord = function(s) {
    let ArrayPalavras = s.split(/\s+/).filter(word => word.trim() !== "") //parte mais complexa (pra mim) do codigo, não conhecia a expressao regular /\s+/
    //agora preciso contar o tamanho da palavra no ultimo slot do array
//    let UltimaPalavra = (ArrayPalavras[ArrayPalavras.length -1]) // determina a ultima palavra com o -1
//    return UltimaPalavra.length; // retorna o tamanho da palavra
//tinhe feito  desse jeito acima, mas para o codigo ficar mais rapido juntei o variavel no return
    return (ArrayPalavras[ArrayPalavras.length -1]).length;
};
// .filter(word => word.trim() !== "") < explicando a parte do codigo:
// .filter(callback) cria um novo array contendo apenas os elementos que retornam true no callback.
// O callback recebe cada elemento word do array e executa word.trim() !== "".
// .trim() remove espaços do início e do fim da palavra.
// Se word for uma string vazia "", ela será removida.
// Isso evita que espaços extras no começo ou no final da string resultem em elementos vazios no array final.


// separar palavras de string em espaços de um array e 
// ignorar espaços na string

// O que significa /\s+/?
// / ... / → Indica que é uma expressão regular.
// \s → Representa qualquer caractere de espaço em branco.
// + → Indica que deve corresponder a um ou mais espaços consecutivos.