const Bn = require('bignumber.js');

function maxPoints(points) {
    const len = points.length;
    if (len <= 2) return len;
    let result = 0;
    for (let i = 0; i < len - 1; i++) {
        let dup = 0;
        let perpendicular = 1;
        const map = new Map();
        const a = points[i];

        for (let j = i + 1; j < len; j++) {
            const b = points[j];
            if (a[0] === b[0] && a[1] === b[1]) dup++;
            else if (a[0] === b[0]) perpendicular++;
        }
        console.log('dupe for points ', a, dup);
        console.log('points perpendicular to a ', perpendicular);

        for (let j = i + 1; j < len; j++) {
            const b = points[j];
            if (a[0] === b[0] && a[1] === b[1]) continue;
            else if (a[0] === b[0]) continue;

            const slope = (new Bn(b[1]).sub(new Bn(a[1]))).div(new Bn(b[0]).sub(new Bn(a[0])));
            if (!map.has(slope)) map.set(slope, 2);
            else map.set(slope, map.get(slope) + 1);
        }

        const slopeMax = Math.max(...map.values());
        console.log('max slop for point ', a, slopeMax);
        result = Math.max(...[result, slopeMax + dup, perpendicular + dup]);
    }
    return result;
}
const points = [
    [0, 0],
    [0, 1],
    [1, 1],
];
console.log(maxPoints(points));

const points2 = [
    [0, 0],
    [94911151, 94911150],
    [94911152, 94911151],
];
console.log(maxPoints(points2));
