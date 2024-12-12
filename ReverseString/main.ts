let t: string = "  hello world  ";

function reverseWords(s: string): string {
  let temp: string[] = s
    .split(" ")
    .reverse()
    .filter((item) => item != "");

  s = temp.join(" ");
  return s;
}

console.log(reverseWords(t));
