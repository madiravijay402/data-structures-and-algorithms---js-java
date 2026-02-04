let a=10
let b=20;
let c=0
let d=""
for(let i=a;i<=b;i++){
   if(i===1){
    d+=i+","
    c++;
   }
   let isprime=true;
   for(let j=2;j<=Math.sqrt(i);j++){
    if(i%j===0){
        isprime=false;
        break;
    }
   }
   if(!(isprime)){
    d+=i+","
    c++;
   }

}
console.log(`number of non prime numbers present in between ${a} and ${b} are : ${c}`);
console.log(`they are ${d}`);

