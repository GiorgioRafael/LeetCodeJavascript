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

//preciso de um construtor???
class ListNode {
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function adicionarNode(head, val) {
    let newNode = new ListNode(val) //precisa ser adicionado através de uma variavel
    if (!head) return newNode; //se o node estiver vazio (nao retornar head, ele cria um novo node, que vira a cabeça)

    let current = head;
    while (current.next){
        current = current.next
    }
    current.next = newNode;
    return head;
}


// percorrer a lista até achar um valor menor que o valor atual(da nova lista){
// adcionar o valor da lista, a nova lista }
var mergeTwoLists = function(list1, list2) {

    let listaSorted = new ListNode()

    function encontrarMenor(head){
        if(!head) return null;
    
        let menorValor = head.val;
        let current = head.next
    
        while(current){
            if(current.val < menorValor){
                menorValor = current.val;
            }
            current = current.next
        }
        return menorValor
    }
    let menorValor1 = encontrarMenor(list1);
    let menorValor2 = encontrarMenor(list2);
    if(menorValor1 < menorValor2){
        let listaSorted = new ListNode(menorValor1)
    } else {
        let listaSorted = new ListNode(menorValor2)
    }

    function adcionarProximo(head){
        let valorAtual = head.val;
        let current = head.next;

        while(current){
            if(valorAtual < current.val){
                current = current.next
            } else if(valorAtual == current.val){
                adicionarNode(head, current.val)
            } else if(valorAtual > current.val){
                valorAtual = current.val
            }
        }
    }
    //verificacao das listas procurando proximo numero seguinte
    


}