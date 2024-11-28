import LinkedList from "../linkedList/LinkListImpl";

class Queue<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new LinkedList();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    size(): number {
        return this.list.size();
    }

    clear(): void {
        this.list.clear();
    }

    enqueue(value: T): void {
        this.list.addBack(value);
    }

    dequeue(): T {
        return this.list.deleteFront();
    }

    peekFront(): T {
        return this.list.peekFront();
    }

    peekBack(): T {
        return this.list.peekBack();
    }
}

export default Queue;