import ListNode from "./Node";

interface List<T> {
    head: ListNode<T>;
    tail: ListNode<T>;
    size: number;
}

class LinkedList<T> {
    private list: List<T> | undefined;

    constructor() {
        this.list = undefined;
    }

    print(): void {
        if (this.list) {
            let current = this.list.head;

            while (current !== null) {
                console.log(`${current.val}->`);
                if (current.next instanceof ListNode) {
                    current = current.next;
                } else {
                    break;
                }
            }
        } else {
            throw new Error("List is empty")
        }
    }

    size(): number {
        if (this.list) return this.list.size;
        return 0;
    }

    isEmpty(): boolean {
        return !this.list;
    }

    addFront(val: T): void {
        const newNode = new ListNode(val);

        if (this.list) {
            newNode.next = this.list.head;
            this.list.head = newNode;
            this.list.size++;
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }

    }

    addBack(val: T): void {
        const newNode = new ListNode(val);

        if (this.list) {
            this.list.tail.next = newNode;
            this.list.tail = newNode;
            this.list.size++;
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }
    }

    deleteFront(): T {
        if (this.list) {
            const val = this.list.head.val;

            if (this.list.head.next instanceof ListNode) {
                this.list.head = this.list.head.next
                this.list.size--;
            } else {
                this.list.size = 0;
                this.list = undefined;

            }
            return val;
        } else {
            throw new Error("List is empty")
        }
    }

    deleteBack(): T {
        if (this.list) {
            const val = this.list.tail.val;
            let current = this.list.head;

            if (current.next === null) {
                this.list.size = 0;
                this.list = undefined;
            } else {
                while (current.next !== this.list.tail) {
                    if (current.next instanceof ListNode) {
                        current = current.next;
                    }
                }
                this.list.tail = current;
                this.list.tail.next = null;
                this.list.size--;
            }
            return val;
        } else {
            throw new Error("List is empty")
        }
    }

    clear(): void {
        this.list = undefined;
    }

    peekBack(): T {
        if (!this.list) throw new Error("List is empty");
        return this.list.tail.val;
    }

    peekFront(): T {
        if (!this.list) throw new Error("List is empty");
        return this.list.head.val;
    }
}

export default LinkedList;