//Logical AND :
let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //true 
console.log("cond1 && cond2 = ",cond1 && cond2);

let cond3 = a < b; //false 
let cond4 = a === b; //false
console.log("cond3 && cond4 = ",cond3 && cond4);

let cond5 = a > b; //true
let cond6 = a !== 6; //false
console.log("cond5 && cond6 = ",cond5 && cond6);

let cond7 = a < b; //false 
let cond8 = a === b; //true
console.log("cond7 && cond8 = ",cond7 && cond8);

//Logical OR :

let c = 6;
let d = 5;

let cond9 = c > d; //true
let cond10 = c === 6; //true 
console.log("cond9 || cond10 = ",cond9 || cond10);

let cond11 = c < d; //false 
let cond12 = c === d; //false
console.log("cond11 || cond12 = ",cond11 || cond12);

let cond13 = c > b; //true
let cond14 = c !== 6; //false
console.log("cond13 || cond14 = ",cond13 || cond14);

let cond15 = c < d; //false 
let cond16 = c !== d; //true
console.log("cond15 || cond16 = ",cond15 || cond16);

//Logical NOT (!) :
  let m = 10;
  let n = 15;

  console.log("!(m > n)",!(m > n));
  console.log("!(m < n)",!(m < n));
  console.log("!(m === n)",!(m === n));
  
