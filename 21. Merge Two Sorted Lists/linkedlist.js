class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Classe para manipular a Linked List
class LinkedList {
    constructor() {
        this.head = null;  // Começa sem nenhum nó
    }

    // Adiciona um valor ao final da lista
    append(val) {
        let newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Converte a linked list para um array
    toArray() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.val);
            current = current.next;
        }
        return array;
    }
}