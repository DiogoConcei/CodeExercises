class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let new_list: ListNode | null = null;
  let tail: ListNode | null = null;

  if (list1 && list2) {
    if (list1.val <= list2.val) {
      new_list = list1;
      list1 = list1.next;
    } else {
      new_list = list2;
      list2 = list2.next;
    }
    tail = new_list;
  } else if (list1) {
    return list1;
  } else if (list2) {
    return list2;
  }

  while (list1 || list2) {
    console.log("Loop start");
    console.log("list1:", list1 ? list1.val : null);
    console.log("list2:", list2 ? list2.val : null);
    console.log("tail:", tail ? tail.val : null);

    let nextNode: ListNode | null = null;

    if (!list1) {
      nextNode = list2;
      list2 = list2.next;
    } else if (!list2) {
      nextNode = list1;
      list1 = list1.next;
    } else if (list1.val <= list2.val) {
      nextNode = list1;
      list1 = list1.next;
    } else {
      nextNode = list2;
      list2 = list2.next;
    }

    if (tail) {
      tail.next = nextNode;
      tail = tail.next;
    }

    console.log("✅ Estado atual da lista:");
    printList(new_list);
  }

  return new_list;
}

// --- Criando listas manualmente ---
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// --- Chamando a função ---
const merged = mergeTwoLists(list1, list2);

// --- Função simples para imprimir a lista ---
function printList(list: ListNode | null): void {
  const values: string[] = [];
  let current = list;

  while (current) {
    values.push(`${current.val}`);
    current = current.next;
  }

  const output = values.join(" -> ") + " -> null";
  console.log(output);
}

// --- Imprimindo o resultado ---
printList(merged);
