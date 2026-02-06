let num = "121";
let result = new Set();

function permute(str, l, r) {
  if (l === r) {
    result.add(str);
    return;
  }

  for (let i = l; i <= r; i++) {
    str = swap(str, l, i);
    permute(str, l + 1, r);
    str = swap(str, l, i); // backtrack
  }
}

function swap(str, i, j) {
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}

permute(num, 0, num.length - 1);

// print result
console.log("Unique permutations:");
for (let val of result) {
  console.log(val);
}
