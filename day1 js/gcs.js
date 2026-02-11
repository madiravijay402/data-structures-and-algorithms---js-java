let a=10;
let b=20;
let x=a;
let y=b;
while(y!==0){
    let temp=y;
    y=x%y;
    x=temp;
}
console.log("gcd/hcf :",x);
let gcd=x;
let lcm=(a*b)/gcd;
console.log(lcm);
// let temp=a;
// a=b;
// b=temp;
// console.log(a,b);

a=a+b;
b=a-b;
a=a-b;
console.log("after swapping",a,b);

let c=30;
let d=40;
console.log(c,d);

[c,d]=[d,c]
console.log(c,d);



