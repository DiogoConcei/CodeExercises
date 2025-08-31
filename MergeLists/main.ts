class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Função que você ainda vai implementar
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  console.log(list1);
  console.log(list2);
  return null;
}

// --- Criando listas manualmente ---
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// --- Chamando a função ---
const merged = mergeTwoLists(list1, list2);

// --- Função simples para imprimir a lista ---
function printList(list: ListNode | null) {
  let current = list;
  let output = "";
  while (current) {
    output += current.val + " -> ";
    current = current.next;
  }
  output += "null";
  console.log(output);
}

// --- Imprimindo o resultado ---
printList(merged);
