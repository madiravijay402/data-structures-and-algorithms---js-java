let str1="vijay";
let str2="ijayv";
str1=str1.toLowerCase();
str2=str2.toLocaleLowerCase();

let count={};
if(str1.length!==str2.length){
    console.log("not anagrams");
}
else{
    let s1=str1.split("").sort().join("");
    let s2=str2.split("").sort().join("");
    if(s1===s2){
        console.log("Anagrams");
    }else{
        console.log("not anagrams");
    }
}