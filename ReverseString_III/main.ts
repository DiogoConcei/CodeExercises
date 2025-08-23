function reverseStringIII(s: string): string {
  const arr = s.split("");
  let l = 0;

  for (let r = 0; r <= arr.length; r++) {
    if (r === arr.length || arr[r] === " ") {
      for (let i = l, j = r - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      l = r + 1;
    }
  }

  console.log(`Resultado final: ${arr.join("")}`);
  return arr.join("");
}

console.log(reverseStringIII("hello world"));
