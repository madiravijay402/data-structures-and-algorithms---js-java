let a=123;
temp=a;
result=0;
let digits=a.toString().length;
while(temp>0){
    let digit=temp%10;
    result+=Math.pow(digit,digits);
    temp=Math.floor(temp/10);
}
if(result===a){
    console.log("amstrong number");
}
else{
    console.log("not an amstrong number");
    
}

let n1=0;
let n2=-1;
let fb=[];
let c=5;

for(let i=0;i<=c;i++){
    fb.push(n1);
    let temp=n1+n2;
    n1=n2;
    n2=temp;
}
console.log(fb);
