const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]

function plusOne(digits: number[]): number[] {
    let digitStr = '';

    for (let i = 0; i < digits.length; i++) {
        digitStr += digits[i].toString();
    }

    let bigIntValue = BigInt(digitStr) + BigInt(1);

    let resultStr = bigIntValue.toString();
    let result: number[] = [];

    for (let i = 0; i < resultStr.length; i++) {
        result.push(Number(resultStr[i]));
    }

    return result;
}


console.log(plusOne(digits))