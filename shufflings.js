
function should(value) {
    const newString = []
    const splitCher = value.split('');
    function shuffleCallBack(n, arr) {
        if (n === 1) {
            newString.push(arr.join(''))
        } else {
            for (let i = 0; i < n; i++) {
                shuffleCallBack(n - 1, arr);
                if (n % 2 === 0) {
                    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
                } else {
                    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
                }
            }
        }
    }
    shuffleCallBack(splitCher.length, splitCher);
    return Array.from(new Set(newString));
}

console.log(should("a"))
console.log(should("ab"))
console.log(should("abc"))
console.log(should("aabb"))