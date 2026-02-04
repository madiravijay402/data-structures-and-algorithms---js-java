let a = [1, 12, 12, 3, 4, 9];

let b = [...new Set(a)];

console.log(b);
let c= [...new Set(a)].sort((x, y) => x - y);
console.log(c);
