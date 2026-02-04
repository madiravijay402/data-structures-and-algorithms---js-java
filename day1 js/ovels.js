let a="vijay";
let ovelsc=0;
let oc=""
let cons=0;
let consd=""
let ch;
for(let i=0;i<a.length;i++){
    ch=a[i]
    if(/[aeiou]/.test(ch)){
    oc+=ch+"";
    ovelsc++;
}
else if(!(/[aeiou]/.test(ch))){
    consd+=ch+"";
    cons++;
}
}

console.log(`vowels count : ${ovelsc}`);
console.log(`vowels in word are : ${oc}`);

console.log(`Consonants count: ${cons}`);
console.log(`Consonants in word are: ${consd}`);
