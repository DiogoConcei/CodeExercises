let numbers = [3, 2, 4];

let target = 6;

function twoSum(nums: number[], target: number): number[] {
  let hashMap: Map<number, number> = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    let complemento = target - nums[idx];

    if (hashMap.has(complemento)) {
      const firstIdx = hashMap.get(complemento);

      if (firstIdx !== undefined) {
        return [firstIdx, idx];
      }
    }

    hashMap.set(nums[idx], idx);
  }

  return [];
}

console.log(twoSum(numbers, target));
