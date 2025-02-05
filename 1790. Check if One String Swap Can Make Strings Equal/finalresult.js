function areAlmostEqual(s1, s2){
    let count = 0;
    let letraStr1,letraStr2,posicao1,posicao2;
    let minLength = Math.min(s1.length, s2.length)
    if(s1 == s2){
        return true
    } else {
        for(let i =0; i < minLength; i++){
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
            let temp = s1.split('');
            [temp[posicao1], temp[posicao2]] = [temp[posicao2], temp[posicao1]];
            let novoArray = temp.join('');
            if(novoArray == s2){
                return true
            }
        
    }
    return false
    
}