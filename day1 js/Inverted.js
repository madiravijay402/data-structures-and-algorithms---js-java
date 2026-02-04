let a=5;
for(let i=0;i<a;i++){
    let line=""
    for(let j=0;j<a-i;j++){
        line+=" ";
    }
    for(let k=0;k<2*i-1;k++){
        line+="*"
    }
    console.log(line);
    
}
