import { SnakeCell } from 'src/app/interface/snake.interface';

export class SnakeNode {
    data: SnakeCell;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class SnakeList {
    head: SnakeNode;
    constructor() {
        this.head = null;
    }

    public shiftHead(newData) {
        const newNode = new SnakeNode(newData);
        newNode.next = this.head;
        this.head = newNode;
    }

    public addTail(newData) {
        const newNode = new SnakeNode(newData);

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        last.next = newNode;
    }

    public findlength() {
        let curr = this.head;
        let cnt = 0;
        while (curr) {
            cnt = cnt + 1;
            curr = curr.next;
        }
        return cnt;
    }

    public convertArr() {
        // let len1 = this.findlength(head);
        const arr = [];
        // let index = 0;
        let curr = this.head;

        while (curr) {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;
    }

    public removeLastNode() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            this.head = null;
            return null;
        }
        let secondLast = this.head;
        while (secondLast.next.next) {
            secondLast = secondLast.next;
        }
        secondLast.next = null;
    }

    public removeFirstNode() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp = null;
    }

    public getLastNode() {
        let current = this.head;
        let next = current.next;

        while (next) {
            current = next;
            next = current.next;
        }
        return current;
    }
}
