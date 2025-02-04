function removeDuplicates(nums) {
    let dummy = []
    let valUnicos = 0;
    for(let i = 0; i < nums.length; i++){
        if(dummy.includes(nums[i])){
        }else {
            dummy.push(nums[i])
            valUnicos++
        }
    }
    for (let j = 0; j < dummy.length; j++) {
        nums[j] = dummy[j];
    }

    return dummy.length;

};
let uniqueCount = removeDuplicates(array);
console.log(uniqueCount);
console.log(array.slice(0, uniqueCount));

//meio chatinho de entender o desafio, mas consegui resolver a logica até que fácil. o output é esperado