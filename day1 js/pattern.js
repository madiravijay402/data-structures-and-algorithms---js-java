let n=5;
for(let i=1;i<=n;i++){
    let line="";
    for(let j=1;j<=n-i;j++){
        line+=" ";
    }
    for(let k=1;k<=i;k++){
        line+=i;
    }
    console.log(line);
    
}
let a = 4;

for (let i = 1; i <= a; i++) {
  let line = "";

  // spaces
  for (let s = 1; s <= a-i; s++) {
    line += " ";
  }

  // numbers
  for (let num = 1; num <= 2 * i - 1; num++) {
    line += num;
  }

  console.log(line);
}
