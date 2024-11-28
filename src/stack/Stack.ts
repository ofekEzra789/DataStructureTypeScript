import LinkedList from '../linkedList/LinkListImpl'
import ListNode from "../linkedList/Node";

class Stack<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList();
    }

    size(): number {
        return this.list.size();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    clear(): void {
        this.list.clear();
    }

    push(el: T): void {
        this.list.addBack(el);
    }

    pop(): T {
        if (!this.list.isEmpty()) {
            return this.list.deleteBack();
        } else {
            throw new Error("Stack is empty");
        }
    }

    peek(): T {
        return this.list.peekBack();
    }
}

export default Stack;