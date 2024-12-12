let s: string = "leetcode";

function reverseVowels(s: string): string {
  let vowels: string[] = ["a", "e", "i", "o", "u"];
  let position: number[] = [];
  let s2 = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      position.push(i);
    }
  }

  let finish = position.length - 1;


  for (let j = 0; j < position.length; j++) {
    s2[position[j]] = s[position[finish]];
    finish--;
  }

  return s2.join(""); 
}

console.log(reverseVowels(s)); 
