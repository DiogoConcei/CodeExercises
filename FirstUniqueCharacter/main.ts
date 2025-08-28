let string = "leetcode";

function firstUniqChar(s: string): number {
  let arr = s.split("");
  let hashMap: Map<string, number[]> = new Map();

  for (const [idx, char] of arr.entries()) {
    if (!hashMap.has(char)) {
      hashMap.set(char, [idx, 1]);
    } else {
      const oldValue = hashMap.get(char);
      if (oldValue) {
        hashMap.set(char, [oldValue[0], oldValue[1] + 1]);
      }
    }
  }

  for (const [key, value] of hashMap) {
    if (value[1] === 1) {
      return value[0];
    }
  }

  return -1;
}

console.log(firstUniqChar(string));
