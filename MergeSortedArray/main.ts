const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n1 = 3


function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    if (n == 0) {
        return
    }

    if (m !== 0) {
        for (let i = nums1.length - 1; i >= m; i--) {
            nums1[i] = nums2[--n]
        }
    }

    if (m == 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[--n]
        }
    }

    console.log(nums1.sort((a, b) => a - b))
};

merge(nums1, m, nums2, n1)