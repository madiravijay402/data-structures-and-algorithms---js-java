// // let a=18;
// // if(a>=18){
// //     console.log(`${a} is valid age for driving license`);
// // }
// // else if(a<18){
// //     console.log(`you will be bursted b y cop if you ride a bike`);
// // }

// let display=document.getElementById("result");
// function press(value){
//     display.value+=value;
// }
// function calculate(){
//     try{
//         display.value=eval(display.value)
//     }catch{
//         display.value="error";
//     }
// }

// function clearResult(){
//     display.value="";
// }

let day=3;

switch(day){
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    default:
      console.log("not valid input");
      
}

let arr=[12,22,21,3,90,5];
if(arr[0]%2===0){
    console.log("positive digit hai");
    
}
else if(arr[0]%2!==0){
    console.log("negetive hai");
}
for(let i=0;i<=10;i++){
    console.log(i);
}
for (const key in arr) {
    if (!Object.hasOwn(arr, key)) continue;
    
    const element = arr[key];
    console.log(element);
}

let c=4;

do {
    console.log("while loop will start"+c);
    c--;
} while (c>0);

(function(){
    console.log("started");
})();

let numbers=[1,2,3,4];
numbers.forEach(c=>{
    console.log(c*2);
})

let trippled=numbers.map((num,index)=>{
    return{
        index:index,
        cube:num**3
    };
});

console.log(trippled);



function pc(arr,callback){
    arr.forEach(callback);
}
pc([10,20,30],function(value){
    console.log(value+5);
});

(function(){
    console.log("app started");
    let appName='clculator';
    console.log(appName+"initialized");
    
})();

function gt(name,callback){
    console.log(`${name} has arrived on platform no:1`);
    callback();
}
function dept(){
    console.log("will leave in 10 minutes");
}
gt("grand trunk express",dept);

function add(x,y){
    return x+y;
}

function calculate(a,b,operation){
    console.log(operation(a,b));
}
calculate(5,3,add)

function processArray(arr,callback){
    arr.forEach(callback)
}
processArray([1,2,3],(num)=>{
    console.log(num**3);
})

