let inp="vj 23 #@ ww@"

let spchar=""
let spcount=0;
let space=0;

for(let i=0;i<inp.length;i++){
    let ch=inp[i];
    if(ch===" "){
        space++;
    }
    else if(!(/[a-zA-Z0-9]/.test(ch))){
        spchar+=ch+"";
        spcount++;
    }
        // -- regex literal
}
console.log(`spacial characters: ${spchar.trim()}`);
console.log(`special characters count : ${spcount}`);
console.log(`space count: ${space}`);


