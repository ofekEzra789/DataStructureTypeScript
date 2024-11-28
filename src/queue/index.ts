import Queue from "./Queue";

const q = new Queue<number>();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.dequeue();
q.dequeue();
console.log(q);
