function fillWater(input) {
    const result = [];
    let a = 0;
    let b = input.length - 1;
    result[a] = 0;
    result[b] = 0;
    let maxL = input[a];
    let maxR = input[b];
    let w;
    while (a < b) {
        const min = Math.min(maxL, maxR);
        if (min === maxL) {
            w = min - input[a + 1];
            result[a + 1] = w > 0 ? w : 0;
            maxL = Math.max(maxL, input[a + 1]);
            a++;
        } else {
            w = min - input[b - 1];
            result[b - 1] = w > 0 ? w : 0;
            maxR = Math.max(maxR, input[b - 1]);
            b--;
        }
    }
    return result.reduce((sum, cur) => sum + cur, 0);
}
const input = [6, 4, 5, 7];
console.log(fillWater(input));
