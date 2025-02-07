console.log("hello world")

//temporal dead zone and variable hoisting
console.log(a); //undefined
console.log(b);//error dae ga
console.log(c);//error dae ga
var a=10;
let b=100;
const c=100;

//functions 
//1st way
function a(){
  console.log("this is a function");
}
a();

//2nd way
function b(name){
  console.log("hello"+" "+name);
}
b("sam");
//3rd way
function c(name) {
  console.log("hello" + " " + `${name}`);
}
c("sam"); 
//4th way
let d=function(name){
  console.log("hello"+" "+name);
}
d("ankit");
//5th way
let e=(name)=>{
  console.log("hello"+" "+name); 
}
e("ramlal");

//6th way iife
(function(name){
  console.log("hello ji"+" "+name);
})("shyamlal");

//callback function
function f(a){
  console.log("this is a function");
  a();
}

function g (){
  console.log("this is a callback function");
}
f(g);

//calculator
function add(a,b){
  return (a+b);
}

let sub=function(a,b){
  return (a-b);
}
let multiply=(a,b)=>{
  return (a*b);
}
let divide=(a,b)=>{
  if(b==0)console.log("infinity");
  else{
    return (a/b);
  }
}
console.log(add(3,4));
console.log(sub(5,9));
console.log(multiply(3,4));
console.log(divide(.5,2));





