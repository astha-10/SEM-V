const calculate = (operation, ...args) => {
    const operations = {
      factorial: (n) => (n <= 1 ? 1 : n * calculate('factorial', n - 1)),
      fibonacci: (num) => {
        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib.slice(0, num);
      },
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => (b !== 0 ? a / b : 'Division by zero error'),
      power: (base, exp) => base ** exp,
    };
  
    return operations[operation](...args);
  };


console.log(calculate('factorial', 5));      // Output: 120
console.log(calculate('fibonacci', 6));      // Output: [0, 1, 1, 2, 3, 5]
console.log(calculate('add', 5, 3));         // Output: 8
console.log(calculate('power', 2, 4));       // Output: 16

  