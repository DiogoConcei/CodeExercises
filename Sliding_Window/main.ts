function maximumLengthSubstring(s: string): number {
  const arr = s.split("");
  let r = 0;
  let l = 0;
  let hashmap: Map<string, number> = new Map();
  let max = 1;

  hashmap.set(arr[0], 1);

  while (r < arr.length - 1) {
    r += 1;

    if (hashmap.get(arr[r])) {
      let valorAtual = hashmap.get(arr[r]) || 0;
      hashmap.set(arr[r], valorAtual + 1);
    } else {
      hashmap.set(arr[r], 1);
    }

    while (hashmap.get(arr[r]) == 3) {
      let valorAtual = hashmap.get(arr[l]) || 0;
      hashmap.set(arr[l], valorAtual - 1);
      l += 1;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
}

console.log(maximumLengthSubstring("eebadadbfa"));
