class No {
  value: number;
  next: No | null = null;
  prev: No | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class DoublyLinkedList {
  head: No | null = null;
  tail: No | null = null;

  unshift(value: number) {
    let newNode = new No(value);

    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  push(value: number) {
    let newNode = new No(value);

    newNode.prev = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  remove(): No | null {
    if (!this.head) {
      return null;
    }

    const removed = this.head;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return removed;
  }

  pop(): No | null {
    if (!this.tail) {
      return null;
    }

    const removed = this.tail;

    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return removed;
  }
}
