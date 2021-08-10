function insertNodeAtHead(head, data) {
    // built in function SinglyLinkedListNode passing in data
    // We know that the head is next to NULL

    let newNode = new SinglyLinkedListNode(data);
    // If no head, our initilized newNode is the head and we will return.
    if (!head){
        head = newNode
        return head
    // Else, we will insert a newNode next to head. Then we will return.
    } else {
        newNode.next = head
        head = newNode
    }
    return head
}


// TEST CASES:
// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem
