let a="badab"
let isPalindrome=true;
for(let i=0;i<a.length/2;i++){
    if(a[i]!==a[a.length-1-i]){
        isPalindrome=false;
        break;
    }
}
if(isPalindrome){
    console.log("palindrome string");
}
else{
    console.log("not a palindrome");
    
}