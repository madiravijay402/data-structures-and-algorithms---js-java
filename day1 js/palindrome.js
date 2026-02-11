let a=123;
let temp=a;
let reverse=0;
while(temp>0){
    let digit=temp%10;
    reverse=reverse*10+digit;
    temp=Math.floor(temp/10); 
}
if(reverse===num){
    console.log("palindrome number");
}
else{
    console.log("not palindrome");
}