function maximumWater(a) {
    let l = 0;
    let r = a.length - 1;

    let water = 0;
    while (l < r) {
        const w = Math.min(a[l], a[r]) * (r - l);
        water = Math.max(water, w);
        if (a[l] < a[r]) l++;
        else r--;
    }
    return water;
}

const a = [6, 1, 3, 4, 3, 6, 7, 2, 9];
console.log(maximumWater(a));
