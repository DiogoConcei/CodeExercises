const num = [3, 2, 2, 3]
const val = 3

function removeElement(num: number[], val: number): number {
    let k = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] === val) {
            num[i] = -1
        } else {
            k++
        }
    }

    return k
};

console.log(removeElement(num, val))