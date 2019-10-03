const Node = require('./node');

class LinkedList {
    constructor() {

        this._head = new Node();
        this._tail = this._head;
        this.length = 0;
        //this._head = null;
        //this._tail = null;        
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
        
        return this;
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

        if (!(this.length)) {
            this.append(new Node(data));
            return this;
        }

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

        this.length++;

        return this;
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

        return this;
    }

    deleteAt(index) {

        var findNode = this._head;
        
        if (index === 0) {

           if (findNode.next !== null) {

                findNode = this._head.next;
                findNode.prev = null;
                this._head = findNode;
            }
        } else if (index === this.length - 1) {

            if (findNode.prev !== null) {

                findNode = this._tail.prev;
                findNode.next = null;
                this._tail = findNode;
            }
        } else {
            
            for (var i = 0; i < index; i++)
                findNode = findNode.next;
            
            findNode.data = 0;
            var findNodePrev = findNode.prev;
            var findNodeNext = findNode.next;

            findNodePrev.next = findNodeNext;
            findNodeNext.prev = findNodePrev;
        }
        this.length--;
        return this;
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
