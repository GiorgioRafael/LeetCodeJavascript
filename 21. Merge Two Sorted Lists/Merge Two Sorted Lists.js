/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

*/

let list1 = [1,2,4]
let list2 = [1,3,4]
var mergeTwoLists = function(list1, list2) {
    let mergedArrays = list1.concat(list2);
    mergedArrays.sort((a, b) => a - b);   
    return mergedArrays

    //fiz uma funcao que junta duas listas e da sort nelas, mas nao funciona para listas, preciso estudar mais o conceito de lista e como poderia fazer isso;
    // talvez se eu rodasse a lista inteira adcionando ela a outra variavel
}