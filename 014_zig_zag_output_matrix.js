function printFrom(row, col, a, w) {
    process.stdout.write(`print from ${row}-${col}: `);
    while (row >= 0 && col <= w - 1) {
        process.stdout.write(`${a[row--][col++]} `);
    }
    console.log('');
}

function zigzag(input) {
    const h = input.length;
    const w = input[0].length;
    let row = 0;
    let col = 1;
    while (true) {
        if (row < h) {
            printFrom(row++, 0, input, w);
        } else {
            printFrom(h - 1, col++, input, w);
        }
        if (row === h && col === w) break;
    }
}


const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
zigzag(input);
