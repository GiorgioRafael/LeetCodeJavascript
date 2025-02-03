var mergeTwoLists = function(list1, list2){
    let arrayFinal = []
    function LinkedListToArray(head){
        let array = [];
        let current = head;
    
        while(current){
            array.push(current.val);
            current = current.next;
        }
        return array;
    }
    let array1 = LinkedListToArray(list1)
    let array2 = LinkedListToArray(list2)

    arrayFinal = array1.concat(array2)
    let arrayFinalOrganizado = arrayFinal.sort((a, b) => a - b);
    console.log(arrayFinalOrganizado);

function arrayToLinkedList(array) {
    if (array.length === 0) return null;

    let head = new ListNode(array[0]);
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }

    return head;
}
return arrayToLinkedList(arrayFinalOrganizado)
}


