class CircularBuffer<T> {
    private list: T[];
    private sz: number;
    private capacity: number;

    private readIndex: number;
    private writeIndex: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.list = new Array(this.capacity);
        this.sz = 0;

        this.readIndex = 0;
        this.writeIndex = 0;
    }

    size(): number {
        return this.capacity;
    }

    isEmpty(): boolean {
        return this.size() === 0
    }

    clear(): void {
        this.list = new Array(this.capacity);
        this.sz = 0;
    }

    enqueue(value: T): void {
        this.list[this.writeIndex] = value;

        const valIsOverWritten = this.sz !== 0 && this.writeIndex === this.readIndex;

        if (valIsOverWritten) {
            this.readIndex = (this.readIndex + 1) % this.capacity;
        }

        this.writeIndex = (this.writeIndex + 1) % this.capacity;
        this.sz += 1;
    }

    dequeue(): T | null {
        if (this.isEmpty()) return null;

        const removedVal = this.list[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.capacity;

        this.sz -= 1;
        return removedVal;
    }

    peekFront(): T | null {
        if (this.isEmpty()) return null;

        return this.list[this.readIndex]
    }

    peekBack(): T | null {
        if (this.isEmpty()) return null;

        let i = this.writeIndex - 1;
        if (i < 0) {
            i = this.capacity - 1;
        }
        return this.list[i];
    }
}

export default CircularBuffer;