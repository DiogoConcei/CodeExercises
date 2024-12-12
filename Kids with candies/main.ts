let candies: number[] = [2, 3, 5, 1, 3];
let extraCandies = 3;
let answer: boolean[] = [];

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let arrow = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= Math.max(...candies)) {
      console.log(
        ` ${candies[arrow]} [TAM - 1] || ${candies[i]} [TAM + 1] || ${
          candies[arrow] + extraCandies
        } [Candies + N] \n`
      );
      answer.push(true);
    } else {
      answer.push(false);
    }

    arrow += 1;
  }

  return answer;
}

console.log(kidsWithCandies(candies, extraCandies));
