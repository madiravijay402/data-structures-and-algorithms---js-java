let arr=[12,44,15,6];
for(let i=0;i<arr.length;i++){
    let g="";
    for(let j=i;j<arr.length;j++){
        g+=arr[j]+" ";
        console.log(g);
    }
}
let n=arr.length;
let count=n*(n+1)/2;
console.log(`total no.of.subarrays : ${count}`);

