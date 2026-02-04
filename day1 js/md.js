let a=-4;
let b=-4;
let c=5;
switch(c){
    case 1:
        console.log("multiplication table");
        if(b>0){
            for(let i=1;i<=b;i++){
            console.log(`${i}*${a}=${i*a}`);
        }
        }
        else if(b<0){
            for(let i=0;i>=b;i--){
                console.log(`${i}*${a}=${i*a}`);
                
            }
        }
        break;
    case 2:
        for(let i=1;i<=b;i++){
            console.log(`${i}/${a}=${i/a}`);
        }
        break;
    default:
        console.log("invalid choice");
}