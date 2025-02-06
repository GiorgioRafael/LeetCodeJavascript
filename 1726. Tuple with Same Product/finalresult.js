function tupleSameProduct(nums){
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
 function getPermutations(arr) {
     if (arr.length === 0) return [[]]; 
     let result = []; 
     for (let i = 0; i < arr.length; i++) { 
         let rest = arr.slice(0, i).concat(arr.slice(i + 1));
         let perms = getPermutations(rest); 
         
         for (let perm of perms) { 
             result.push([arr[i], ...perm]);
         }
     }
     return result;
 }
 
 function getAll4Permutations(arr) {
     let combinations = getCombinations(arr, 4); 
     let allPermutations = [];
     
     for (let combination of combinations) {
         let perms = getPermutations(combination);
         allPermutations.push(...perms);
     }
     
     return allPermutations;
 }
 let allPermutations = getAll4Permutations(nums)
 let contador = 0;
 for(let subArray of allPermutations){
     if(subArray[0] *subArray[1] === subArray[2] *subArray[3]){
         contador++
     }
 }
 return contador;
 }