let arr=[12,2,41,14,9];
let maxSum=-Infinity;
let minSum= Infinity;
let start=0;
let end=0;
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=i;j<arr.length;j++){
        sum+=arr[j];
        if(sum>maxSum){
            maxSum=sum;
        }
        if(sum<minSum){
            minSum=sum;
            start=i;
            end=j;
        }
    }
}
console.log(` maximum sum of a sub array : ${maxSum}`);
console.log(` minimum sum of a sub array : ${minSum}`);
console.log(` the index are ${start} between and including ${end} `);
