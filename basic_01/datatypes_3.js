let name = "kapil"; // String
let rollnumber = 32; // Number
let status = true; // Bollean
let worlwidenumber = BigInt(9843728901837248054378289213689753225688138976789); // BigInt
let bloodgroup = null; // null
let player; // undefined

// console.log(worlwidenumber)
// console.log(bloodgroup)
// console.log(bloodgroup);

console.log(Symbol("K")===Symbol("K"))
const secret = Symbol("secret");
const myObject = {
  [secret]: "hiddenValue",
  publicValue: "visibleValue",  
};

console.log(Object.keys(myObject)); // ["publicValue"]
console.log(myObject[secret]); // "hiddenValue"
