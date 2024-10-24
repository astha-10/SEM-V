console.log("\nUsing Iterators:");
function myNumbers() {
let n = 0;
return {
next: function() {
n += 10;
return { value: n, done: false };
}
};
}
const nIterator = myNumbers();
for (let i = 0; i < 3; i++) {
const result = nIterator.next();
console.log(result.value);
}