function randomInRange(a, b) {
    // Math.random()  [0,1)
    return a + Math.floor((b - a) * Math.random());
}

function shuffle(a) {
    /* eslint-disable no-param-reassign */
    let i = 0;
    const len = a.length;
    while (i < len) {
        const r = randomInRange(i, len);
        const tmp = a[r];
        a[r] = a[i];
        a[i] = tmp;
        i++;
    }
}
const a = [122, 23, 4, 234, 52, 1234, 346, 5, 7, 68, 2, 3423, 4];
shuffle(a);
console.log(a);
