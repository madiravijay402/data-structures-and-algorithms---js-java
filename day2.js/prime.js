let start=20;
let end=50;
let d="";
for(let i=start;i<end;i++){
    let isPrime=true;
    for(j=2;j<=Math.sqrt(i);j++){
        if(i%j===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
            d+=i+",";
        }
}
console.log(`prime numv=bers between ${start} and ${end} are ${d}`);

