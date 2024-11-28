"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkListImpl_1 = __importDefault(require("./LinkListImpl"));
let linkedList = new LinkListImpl_1.default();
// linkedList.insertAtEnd(5);
// linkedList.insertAtEnd(6);
// linkedList.insertAtEnd(7);
// linkedList.insertAtStart(8);
// linkedList.insertAtStart(1);
linkedList.insertAtEnd('o');
linkedList.insertAtEnd('f');
linkedList.insertAtEnd('e');
linkedList.insertAtEnd('k');
linkedList.print();
console.log(linkedList.size);
