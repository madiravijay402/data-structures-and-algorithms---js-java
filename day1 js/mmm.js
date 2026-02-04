let mean=0;
let mode=0;
let median;

let a=[1,33,12,4,9,21]

let b=0;
for(let i=0;i<a.length;i++){
    b+=a[i];
}
mean=b/a.length;

console.log(mean);

let c = [...new Set(a)].sort((x, y) => x - y);


if (c.length % 2 === 0) {
  // even length
  median = (c[c.length / 2 - 1] + c[c.length / 2]) / 2;
} else {
  // odd length
  median = c[Math.floor(c.length / 2)];
}

console.log(median);


console.log(c);

