// Activity 1 : Arithematic Operations
    // Task 1 : Add 2 numbers and log the result to the console.
        function add (a , b ){
            console.log(`Addition of ${a} and ${b}  is : ${a+b}`);
        }
        add(6 , 3)

    // Task 2 : Substract 2 numbers and log the result to the console.
        function Substract (a , b ){
            console.log(`Substraction of ${a} and ${b}  is : ${a-b}`);
        }
        Substract(6 , 3)

    // Task 3 : Multiply 2 numbers and log the result to the console.
        function multiply (a , b ){
            console.log(`Multiply of ${a} and ${b}  is : ${a*b}`);
        }
        multiply(6 , 3)

    // Task 4 : Divide 2 numbers and log the result to the console.
        function Divide (a , b ){
            console.log(`Divide of ${a} and ${b}  is : ${a/b}`);
        }
        Divide(6 , 3)

     // Task 5 : find Remainder of 2 numbers and log the result to the console.
        function Remainder (a , b ){
            console.log(`Remainder of ${a} and ${b}  is : ${a%b}`);
        }
        Remainder(6 , 3)

// Activity 2 : Assignment Operators
    // Task 6 : use the += operator to add a number to a variable and log the result on the console.
        let num1 = 12 ;
        num1 += 5 ;
        console.log(num1);

    // Task 7 : use the -= operator to substract a number from a variable and log the result on the console.
        let num2 = 12 ;
        num2 -= 5 
        console.log(num2);

// Activity 3 : Comparison Operator
    // Task 8 : compare 2 number using greater than (>) and less than (<) operator and log the result on the console.
        function compareGreaterThan(a , b){
            console.log(`${a} > ${b} is : ${a > b}`)
        }
        compareGreaterThan(5 , 3);

        function compareLessThan(a , b){
            console.log(`${a} > ${b} is : ${a < b}`)
        }
        compareLessThan(5 , 3);

    // Task 9 : compare 2 numbers using greater than equal to (>=) and less than equal to (<=) operator and log the result on the console.
        function compareGreaterThanEqual(a , b){
            console.log(`${a} >= ${b} is : ${a >= b}`);
        }
        compareGreaterThanEqual(5 , 3) 

        function compareLessThanEqual(a , b){
            console.log(`${a} > ${b} is : ${a <= b}`)
        }
        compareLessThanEqual(5 , 3);

    // Task 10 : compare 2 numbers using == and === operators and log the result on the console.
        function isEqual(a,b){
            console.log(`${a} and ${b} are : ${a==b}`);
        }
        isEqual(2 ,5);

        function isEquals(a,b){
            console.log(`${a} and ${b} are : ${a===b}`);
        }
        isEquals(2 ,5);
        
    // Task 11 : Compare two numbers using the inequality operator (!=) and log the result
        function compareInequality(a, b) {
            console.log(`${a} != ${b} is: ${a != b}`);
        }
        compareInequality(5, 3);

// Activity 4 : Logical Operators
  
    // Task 12: Use the AND operator (&&) to combine two conditions and log the result
        function logicalAnd(a, b) {
            console.log(`${a} > 0 && ${b} > 0 is: ${a > 0 && b > 0}`);
        }
        logicalAnd(5, 3);
    
    // Task 13: Use the OR operator (||) to combine two conditions and log the result
        function logicalOr(a, b) {
            console.log(`${a} > 0 || ${b} < 0 is: ${a > 0 || b < 0}`);
        }
        logicalOr(5, -3);
    
    // Task 14: Use the NOT operator (!) to negate a condition and log the result
        function logicalNot(a) {
            console.log(`!(${a} > 0) is: ${!(a > 0)}`);
        }
        logicalNot(-5);

// Activity 5 : Ternary Operator
    // Task 15 : USE the ternary operator to check number is positive or negative and show the result on the console
        function isPsitiveNo(a){
            const result = a > 0 ? "positive" : "negative"
            console.log(result);
        }
        isPsitiveNo(-5)
// Feature Request 1: Arithmetic Operations Script
    function arithmeticOperations(a, b) {
        console.log(`Addition: ${a + b}`);
        console.log(`Subtraction: ${a - b}`);
        console.log(`Multiplication: ${a * b}`);
        console.log(`Division: ${a / b}`);
        console.log(`Remainder: ${a % b}`);
    }
    arithmeticOperations(10, 2);
 
 // Feature Request 2: Comparison and Logical Operators Script
    function comparisonAndLogicalOperators(a, b) {
        console.log(`${a} == ${b}: ${a == b}`);
        console.log(`${a} != ${b}: ${a != b}`);
        console.log(`${a} > ${b}: ${a > b}`);
        console.log(`${a} < ${b}: ${a < b}`);
        console.log(`(${a} > 0) && (${b} > 0): ${a > 0 && b > 0}`);
        console.log(`(${a} > 0) || (${b} < 0): ${a > 0 || b < 0}`);
        console.log(`!(${a} > 0): ${!(a > 0)}`);
    }
    comparisonAndLogicalOperators(10, -5);
 
// Feature Request 3: Ternary Operator Script
    function ternaryOperatorCheck(a) {
        const result = (a > 0) ? "positive" : "negative";
        console.log(`${a} is: ${result}`);
    }
    ternaryOperatorCheck(-10);
    
    