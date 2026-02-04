let a=[12,3,33,1,7,19];
let c=[...new Set(a)].sort((x,y)=>x-y)
let n=4;
if(n<=c.length){
    console.log(`${n}th largest element in array is : ${c[n-1]}` );
}
else if(n>c.length){
    console.log("n is greater than array size");
    
}

