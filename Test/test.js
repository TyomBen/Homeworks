let a = 5;
let b = "5";

if (a == b && a !== b) {
  console.log("but not strictly equal");
} else if (a == b || a == b) {
  console.log("in some way");
} else {
  console.log("not equal at all");
}