function find(arr) {
    const n = arr.length;
    const expectedSum = (1 + n) * n / 2;
    const expectedProd = Array.from(Array(n).keys()).reduce((prod, cur) => prod * (cur + 1), 1);
    const actualSum = arr.reduce((sum, cur) => sum + cur, 0);
    const actualProd = arr.reduce((prod, cur) => prod * cur, 1);

    const A = actualSum - expectedSum; // same as x-y
    const B = actualProd / expectedProd;// same as x/y
    const y = A / (B - 1);
    const x = y * B;
    console.log(x, y);
}

const input = [1, 3, 5, 1, 4];
find(input);
