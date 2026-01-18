const nums = [2, 7, 11, 15],
  target = 9;

function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map(); // idx -> value
  let answer: number;

  for (let idx = 0; idx < nums.length; idx++) {
    const value = nums[idx];

    let need = target - value;

    // verifica se já possui o complemento
    if (map.has(need)) {
      return [map.get(need)!, idx];
    } else {
      // salva o complemento necessário
      map.set(value, idx);
    }
  }

  return [];
}

console.log(twoSum(nums, target));
