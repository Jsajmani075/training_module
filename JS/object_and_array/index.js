//object and array 

//object 
//object literals
let x={
  name:"Jagjuot ajmanii",
  favourite_song:"panjab",
  greet:function(){
    console.log("hello ji");
  }
}
console.log(x.name);
console.log(x["name"]);
console.log(x.greet());
x.name="shyamlal";
console.log(x.name);
console.log(Object.keys(x));//keys dega
console.log(Object.values(x));//value dega
//has own property valid only for keys 
console.log(x.hasOwnProperty('favourite_song'));//true 
console.log(x.hasOwnProperty('panjab'));//false
console.log(Object.entries(x));  // [["name", "John"], ["age", 30]]
 
//object iterating karna hai
for (let key in x){
  console.log(x);
}

//array
console.log("array chalu hoo gya hai");
let arr=[1,6,"kaka",false,2.98];
console.log(arr[2]);
//for in loop sirf index battaa hai 
for (let key in arr){
  console.log(key);
  console.log(arr[key]);
  console.log("   ");
}
console.log("for in loop khtam hogya hai")

//for of loop tells about values 

for (let key of arr){
  console.log(key);
  // console.log(arr[key]);//error
  // console.log("   ");
}
console.log("for of loop khtam hogya hai")

//for each loop
arr.forEach(function(a){
console.log(a);
});
console.log("for each loop khtam hogya hai")

arr.forEach((a)=>{
  console.log(a);
  });
  console.log("for each loop khtam hogya hai")

  //destructing object 
  console.log("destruct of object")
  const {name,favourite_song,greet}=x;
  console.log(name);
  console.log(favourite_song);
  greet();

  //destructing array
  const[num1]=arr;
  console.log(num1);