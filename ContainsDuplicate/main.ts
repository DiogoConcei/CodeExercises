function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let hashMap: Map<number, number> = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    if (hashMap.has(nums[idx])) {
      let lastIdx = hashMap.get(nums[idx]) || 0;

      if (Math.abs(idx - lastIdx) <= k) {
        return true;
      }
    }
    hashMap.set(nums[idx], idx);
  }

  let keys = [...hashMap.keys()];

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
