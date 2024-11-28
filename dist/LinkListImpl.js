"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(`${current.value}->`);
            current = current.next;
        }
    }
    insertAtEnd(data) {
        let newNode = new Node_1.default(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    insertAtStart(data) {
        let newNode = new Node_1.default(data);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    length() {
        let current = this.head;
        while (current !== null) {
            this.size++;
            current = current.next;
        }
    }
}
exports.default = LinkedList;
