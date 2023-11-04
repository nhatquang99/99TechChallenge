/**
 * 
 * @method For Loop
 * @complexity O(n)
 * @description Uses a simple for loop to iterate from 1 to n and accumulate the sum. It has a linear time complexity.
 */
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * 
 * @method Arithmetic Progression Formula
 * @complexity O(1)
 * @description Uses the formula for the sum of an arithmetic progression. Highly efficient with a constant time complexity.
 */
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * 
 * @method Recursive
 * @complexity O(n)
 * @description Recursion has a linear time complexity, similar to the loop-based approach, but it may be less efficient for very large values of n due to the function call stack.
 */
function sum_to_n_c(n: number): number {
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}

function measurePerformance(fn: (n: number) => number, n: number, iterations: number = 1000): number {
    let totalTime = 0;
  
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      fn(n);
      const end = performance.now();
      totalTime += end - start;
    }
  
    // Calculate the average execution time
    const averageTime = totalTime / iterations;
  
    return averageTime;
  }
  
const n = 100; // Replace with your desired value of 'n'
const iterations = 1000; // Number of times to run each function

const averageTimeA = measurePerformance(sum_to_n_a, n, iterations);
const averageTimeB = measurePerformance(sum_to_n_b, n, iterations);
const averageTimeC = measurePerformance(sum_to_n_c, n, iterations);

console.log('Result of sum_to_n_a', sum_to_n_a(n))
console.log('Result of sum_to_n_b', sum_to_n_b(n))
console.log('Result of sum_to_n_c', sum_to_n_c(n))

console.log('Average Time for sum_to_n_a:', averageTimeA)
console.log('Average Time for sum_to_n_b:', averageTimeB)
console.log('Average Time for sum_to_n_c:', averageTimeC)