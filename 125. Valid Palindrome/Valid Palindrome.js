
//funcao de palindrome de strigs

/*solucao com menos codigo (IA recomendou), vou admitir que nao pensei em nao utilizar um loop
 porem deu 7ms (????????)
let isPalindrome = function(x) {
    let strFiltrada = x.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let xInvertido = strFiltrada.split('').reverse().join('');

    return xInvertido === strFiltrada
};
*/

//solucao mais rapida (pensada por mim) 4ms
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

/*
Solucao um pouco mais otimizada > 6ms???
let isPalindrome = function(x) {
    let xInvertido = ''
    let strFiltrada = x.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    for (let i = strFiltrada.length - 1; i >= 0; i--) {
        xInvertido = xInvertido+strFiltrada[i];
    }

    return xInvertido === strFiltrada
};
*/
