let a=0;
let b=-1;

let n=5;
let c=[]
for(let i=0;i<5;i++){
    c.push(a);
    let temp=a+b;
    a=b;
    b=temp;
}
console.log(c);
