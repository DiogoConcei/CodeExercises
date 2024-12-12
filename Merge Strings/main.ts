let word1: string = "ab";
let word2: string = "pqrs";

function mergeAlternately(word1: string, word2: string): string {
  let largestString: string;
  let merged: string = "";

  if (word1.length > word2.length) {
    largestString = word1;
  } else {
    largestString = word2;
  }

  for (let index = 0; index < largestString.length; index++) {
    if (index <= word1.length - 1) {
        merged += word1[index]
    }

    if(index <= word2.length - 1) {
        merged += word2[index]
    }
  }

  return merged;
}

console.log(mergeAlternately(word1,word2))