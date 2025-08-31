class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let new_list = null;
  let next_node = head.next;

  while (head) {
    next_node = head.next;
    head.next = new_list;
    new_list = head;
    head = next_node;
  }

  return new_list;
}
