const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this._head = null;
        this._tail = null;        
    }

    append(data) {        

        var node = new Node(data);

        if (this.length) {      

            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;    

                         
        } else {
            this._head = node;
            this._tail = node;
        }     
        this.length++;          
    }

    head() {     

        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var findNode = this._head;
        for (var i = 0; i < index; i++) {
            findNode = findNode.next;
        }
        return findNode.data;
    }

    insertAt(index, data) {

        var findNode = this._head;

        for (var i = 0; i < index; i++) {
            findNode = findNode.next;
        }
        var findNodePrev = findNode.prev;
        var node = new Node(data);

        findNodePrev.next = node;
        node.prev = findNodePrev;

        node.next = findNode;
        findNode.prev = node;

    }

    isEmpty() {
        if (this.length === 0)
            return true;
        return false;
    }

    clear() {
        
        this._head.data = null;
        this._tail.data = null;
 
        this.length = 0;
       
    }

    deleteAt(index) {
       var findNode = this._head;

        for (var i = 0; i < index; i++) {
            findNode = findNode.next;
        }

        var findNodePrev = findNode.prev;
        var findNodeNext = findNode.next;

        findNodePrev.next = findNodeNext;
        findNodeNext.prev = findNodePrev;
        
    }

    reverse() {

        if (this.length > 1) {

            var buff;
            
            this._head = this._tail;
            var nodeFromTail = this._head;

            

            for (var i = 0; i < this.length - 1; i++) {

                buff = nodeFromTail.prev;
                nodeFromTail.prev = nodeFromTail.next;
                nodeFromTail.next = buff;

                nodeFromTail = nodeFromTail.next;

            }        
            buff = nodeFromTail.prev;
            nodeFromTail.prev = nodeFromTail.next;
            nodeFromTail.next = buff;
            
            this._tail = nodeFromTail;

        }
        return this;
        
    }

    indexOf(data) {
        var index = 0;
        var findNode = this._head;
        while (findNode !== null) {

            if (findNode.data === data)
                return index;

            index++;
            findNode = findNode.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
