const nums = [1, 0, 1, 1],
  k = 1;

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const value = nums[idx];

    if (map.has(value)) {
      const oldValue = map.get(value);

      if (!oldValue) continue;

      if (Math.abs(oldValue - idx) <= k) {
        return true;
      }
    }

    map.set(value, idx);
  }

  return false;
}

console.log(containsNearbyDuplicate(nums, k));
