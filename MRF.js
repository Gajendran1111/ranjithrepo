// map 
// reduce
// filter

// syntax 
// variable_name.map((value,index,acctualarray)=>)

// let ma  =[10,20,30,40,50]
// let ad =ma.map((val,ind,acc)=> val*10 )
// console.log(ad);

// syntax 
// variable_name.filter((value,index,acctualarray)=>)
let fi =[10,22,20,30,563,40,954,50,54,66,87,966,32,4,2,45,22,4,7,2]
let fil =fi.filter((val,ind,acc)=> acc+1)
console.log(fil);

// syntax
// variable_name.reduce((accumulator, currentValue) => )
let red = [125,5445,2,6,9]
let add =red.reduce((ac,va)=>ac+va)
console.log(add);
