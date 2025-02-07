import {add,sub} from "./index1.js"  ;
console.log(add(3,4));
console.log(sub(1,4));

let a={
  name:"shyamlal",
  age:"50"
}
console.log(a);
//object cloning using spread operator
let b={...a};
console.log(b);