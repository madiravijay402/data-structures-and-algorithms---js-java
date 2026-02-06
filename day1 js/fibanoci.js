let a=0;
let b=1;
let c=5;
let fib=[]

for(let i=0;i<c;i++ ){
    fib.push(a)
     let temp=a+b;
     a=b;
     b=temp;
}
console.log(fib);
