let arr=[12,3,4,9,81];
let target=7;
for(let i=0;i<arr.length;i++){
    let sub=0;
    for(let j=i;j<arr.length;j++){
        sub+=arr[j];
        if(sub===target){
            console.log(`sub array found from ${i} and ${j}`);
        }
    }
}