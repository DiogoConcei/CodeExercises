let str1: string = "TAUXXTAUXXTAUXXTAUXXTAUXX";
let str2: string = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

function gcdOfStrings(str1: string, str2: string): string {
  let a = str1.length;
  let b = str2.length;
  let x = "";

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  for (let i = 0; i < a; i++) {
    x += str2[i];
  }

  return x;
}

console.log(gcdOfStrings(str1, str2));
