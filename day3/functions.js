function hello(){
    console.log('hello');
}

const hi=function(){
    console.log('hi');
}

const hru=()=>{
    console.log('hru');
}

function hof(p1,p2,p3){
    p1();
    p2();
    p3();
}

function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

function calculator(a,b){
    add(a,b);
    sub(a,b);
    mul(a,b);
    div(a,b);
}


// hof(hello,hi,hru);
// calculator(8,9);

// let count=0;
// setInterval(()=>{
//     console.log(count);
//     count=count+1;
// },1000)

let arr=[1,2,3,4,5,6,7,8,9];
let res=arr.map((num)=>{
    return num%2==0;
})
console.log(res);

let evennums=arr.filter(function(nums){
    return nums%2==0;
})

console.log(evennums);

