let str="viJaY";
let cap=0;
let uppervalues="";
let lw=0;
let lowercase="";
for(let i=0;i<str.length;i++){
    let ch=str[i];
    if(/[a-z]/.test(ch)){
        lowercase+=ch+"";
        lw++;
    }
    else if(/[A-Z]/.test(ch)){
        uppervalues+=ch+"";
        cap++;
    }
}
console.log(`upper case letters : ${uppervalues} and count : ${cap}`);
console.log(`lower case letters : ${lowercase} and count : ${lw}`);

