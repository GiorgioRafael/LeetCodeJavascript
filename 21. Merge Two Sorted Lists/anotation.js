
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


//serapacao de etapas:
//1- rodar as duas listas procurando o menor numero
//2- criar uma linked list vazia
//3- adcionar o menor numero como head - se tiver dois (ou mais) numeros iguais, adciona um em seguida do outro 
//4- verificar o proximo numero se é maior ou igual o atual, se for adcionar na lista, se não, ir para o proximo ponteiro
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

//primeiro encontrar o menor valor das listas

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

let menor1 = encontrarMenor(list1);
let menor2 = encontrarMenor(list2);
if(menor1 < menor2){
    //cria a lista como o menor1 sendo o head
} else {
    //cria a lista como o menor2 sendo o head
}

//extrair os valores da lista e colocar num array.

function LinkedListToArray(head){
    let array = [];
    let current = head;

    while(current){
        array.push(current.val);
        current = current.next; //passa para o proximo node
    }
    return array;
}

class ListNode {
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function adicionarNode(head, val) { //funcao para adiconar um novo valor a lista
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

let list1 = new ListNode(1, new ListNode(2, new ListNode(4))); 
let list2 = new ListNode(1, new ListNode(3, new ListNode(4))); 

function adicionarProximoMaior(lista){
    for(let i = list1; i != null; i = i.next){
        if( list1.val >= list1.next){
            adicionarNode(list1, i.next.val)
        }
    }
}
adicionarProximoMaior(list1)
adicionarProximoMaior(list2)

function encontrarMenor(head){ //aparentemente a funcao esta funcional
    if(!head) return null;

    let menorValor = head.val; //define o menor valor como o primeiro
    let current = head.next //atual = primeiro.next

    while(current){ //enquanto ainda tiver valores:
        if(current.val < menorValor){  //se valor atual for menor que o menor valor
            menorValor = current.val; //define o menor valor como o valor comparado(proximo)
        }
        current = current.next //passa para o proximo valor
    }
    return menorValor
}



