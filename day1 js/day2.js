// let up="";
// let lc="";
// let spacecount=0;
// let sepcialcount=0;
// let sp="";

// let name="vijay  m@dir@";

// for(let i=0;i<name.length;i++){
//     let ch=name[i];
//     if(ch===" "){
//         spacecount++;
//     }
//     else if(!(/[a-zA-Z0-9]/.test(ch))){
//         sp+=ch+"";
//         sepcialcount++;
//     }
//     else if(/[a-z]/.test(ch)){
//         lc+=ch+"";
//     }
//     else if(/[A-Z]/.test(ch)){
//         up+=ch+"";
//     }
// }
// console.log(`space count : ${spacecount}`);
//     console.log(`special characters : ${sp}`);
//     console.log(`special charcaters count : ${sepcialcount}`);
//     console.log(`upper case : ${up}`);
//     console.log(`lower case : ${lc}`);

let a=20;
let b=50;
let numbers=[];
for(let i=a;i<=50;i++){
    let isComposite=false;
    for(let j=2;j<Math.sqrt(i);j++){
        if(i%j===0){
            isComposite=true;
            break;
        }
    }
    if(!(isComposite)){
        numbers.push(i);
    }
}
console.log(`prime numbers : ${numbers}`);


let array=[12,22,1,223,4,56,20];

let sorted=[...new Set(array)].sort((x,y)=>x-y);

console.log(sorted);

let s=4;

// for(let i=1;i<=s;i++){
//     let line="";
//     for(let j=1;j<=i;j++){
//         line+="*";
//     }
//     console.log(line);
// }

for(let i=s;i>=1;i--){
    let line="";
    for(let j=s-i;j>=1;j--){
        line+=" ";
    }
    for(let k=2*i-1;k>=1;k--){
        line+="*";
    }
    console.log(line);
    
}
let arr=[16,18,27,16,23,21,19];
let mean;
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
mean=sum/arr.length;
console.log(mean.toFixed(2));

let fact=5;
let n=1;
for(let i=fact;i>=1;i--){
    n*=i;
}
console.log(n);

let a1=30;
let a2=50;
for(let i=a1;i<=a2;i++){
    if((a1*0.5)*2===a1){
        
    }
}