let flowerbed: number[] = [1, 0, 0, 0, 0, 1];
let n: number = 2;

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
      i++;
    }
  }

  return count >= n;
}

console.log(canPlaceFlowers(flowerbed, n));
