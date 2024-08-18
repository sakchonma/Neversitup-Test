function oddInt(value) {

    const countsInt = {}

    for (let i = 0; i < value.length; i++) {
        countsInt[value[i]] = (countsInt[value[i]] || 0) + 1
    }
    console.log(countsInt)
    let countOdd = []
    let k = 0
    for (const i in countsInt) {
        if (countsInt[i] % 2 !== 0) {
            countOdd[k] = Number(i);
            k++
        }
    }
    return countOdd
}

// console.log(oddInt([7]));  // 7
// console.log(oddInt([0]));  // 0
console.log(oddInt([1, 1, 2]));  // 2
console.log(oddInt([0, 1, 0, 1, 0]));  // 0
console.log(oddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 4, 4, 5, 6, 7, 6]));  // 4