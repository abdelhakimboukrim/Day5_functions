function safeDivide(a, b){
    if (b===0) return "Cannot divide by zero";
    else return a/b;
}
console.log(safeDivide(10, 0))