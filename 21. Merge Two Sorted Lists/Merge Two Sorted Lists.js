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


class ListNode {
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4))); 
let list2 = new ListNode(1, new ListNode(3, new ListNode(4))); 

var mergeTwoLists = function(list1, list2){
    let arrayFinal = []
    function LinkedListToArray(head){
        let array = [];
        let current = head;
    
        while(current){
            array.push(current.val);
            current = current.next; //passa para o proximo node
        }
        return array;
    }
    let array1 = LinkedListToArray(list1)
    let array2 = LinkedListToArray(list2)

    arrayFinal = array1.concat(array2)
    let arrayFinalOrganizado = arrayFinal.sort((a, b) => a - b);
    console.log(arrayFinalOrganizado);
    //temos a variavel arrayFinalOrganizado com todos os numeros em ordem

    //preciso criar uma linked list com esses valores

    // Função para converter um array em uma linked list

function arrayToLinkedList(array) {
    if (array.length === 0) return null; // Se o array estiver vazio, retorna null

    let head = new ListNode(array[0]); // Cria o primeiro nó com o primeiro valor do array
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]); // Cria um novo nó e conecta ao anterior
        current = current.next;
    }

    return head;
}
return arrayToLinkedList(arrayFinalOrganizado)

}

mergeTwoLists(list1,list2)


