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

let head = new ListNode(1);

let list1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode)))


//rodando a primeira lista
for(let i = list1; i != null; i = i.next){ //roda a lista inteira, a cada iteração deve achar um numero maior ou igual o numero atual
    if( list1.val >= list1.next){
        adicionarNode(list1, i.next.val)
    }
}
for(let j = list2; j != null; j = j.next){ //roda a lista inteira, a cada iteração deve achar um numero maior ou igual o numero atual
    if( list2.val >= list2.next){
        adicionarNode(list2, j.next.val)
    }
}

function encontrarMenor(head){
    if(!head) return null;

    let menorValor = head.val;
    let current = head.next

    while(current){
        if(current.val < manorValor){
            menorValor = current.val;
        }
        current = current.next
    }
    return menorValor
}



//serapacao de etapas:
//1- rodar as duas listas procurando o menor numero
//2- criar uma linked list vazia
//3- adcionar o menor numero como head - se tiver dois (ou mais) numeros iguais, adciona um em seguida do outro 
//4- verificar o proximo numero se é maior ou igual o atual, se for adcionar na lista, se não, ir para o proximo ponteiro
