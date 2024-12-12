let x: number = 8;

function mySqrt(x: number): number {
  if (x == 0 || x == 1)
    return x;

  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid == x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return right; 
}

console.log(mySqrt(x));  // Esperado: 2
