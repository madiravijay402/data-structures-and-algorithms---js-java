let a="viv";
let c="";
for(let i=a.length-1;i>=0;i--){
    c+=a[i];
}
if(c===a){
    console.log("its a palindrome");
}else{
    console.log("its not a palindrome");
    
}

let num=121;
let org=num;
let reverse=0;
while(num>0){
    let digit=num%10;
    reverse=reverse*10+digit;
    num=Math.floor(num/10);
}
if(org===reverse){
    console.log("this is a palindrome number");
}
else{
    console.log("this is not a palindrome number");
}

