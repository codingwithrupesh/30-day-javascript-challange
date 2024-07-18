//Activity 1 : Function Declaration 
    // Task 1 : check if a number is Even or Odd and log the result to the console.
        function checkEvenOdd(num){
            if(num & 1 === 0){
                console.log(`${num} is an Even Number.`);
            }else{
                console.log(`${num} is Odd Number.`);
            }
        }
        checkEvenOdd(49)

    // Task 2 : Calculate the square of a number and return the result.
        function calculateSquareNo(n){
            // return n*n ;
            return n**2 ;
        }
        let n = 5 ;
        console.log(`Square of ${n} is : ${calculateSquareNo(n)}`);

// Activity 2 : Function Expression 
    // Task 3 : write a function expression to find the maximum of 2 numbers and log the result to the console.
        function findMax2No(num1 , num2){
            return num1 > num2 ? num1 : num2 ;
        }
        let a = 6 , b = 9 ;
        console.log(`Maximum of ${a} and ${b} is : ${findMax2No(a,b)}`);

    // Task 4 :write a function expression to concatinate two strings and return the result.
        function concatenateStrings(str1 , str2){
            // return str1 + str2 ;
            // return `${str1}${str2}`;
            return str1.concat(str2) ;
        }
        let str1 = "abc" ;
        let str2 = "raj"
        console.log(`Concatination of ${str1} and ${str2} are : ${add2Strings(str1 ,str2)}`);    

// Activity 3 : Arrow Function 
    // Task 5 : write a arrow function to calculate the sum of 2 numbers and return the result .
        const sum = (num1 , num2) => {
            return num1+num2 ;
        }
        let val1 = 76 , val2 = 879 ;
        console.log(`Sum of ${val1} and ${val2} = ${sum(val1,val2)}`);
    // Task 6 : Write a arrow function to check if a string contains a specific characters and return a boolean values.
        const result = (str , val) => {
            return str.includes(val) ?  true : false 
        }
        let str = "Hello Everyone , Good Morning"
        let val = "Good"
        console.log(`${str} contains ${val} : ${result(str , val)}`); 

// Activity 4 : Function Parameters and default values
    // Task 7 : write a function that takes 2 parameters and return their products . Provide a default value for the second parameters
        function calculateProductOf2No(num1 , num2 = 4 ) {
            return num1*num2 ;
        }  
        let x = 10, y = 25 ;  
        console.log(`Product of ${x} and ${y} are : ${calculateProductOf2No(x,y)}`);

    // Task 8 :  write a function that takes person's name and age and return a greeting message. Provide a default value for the age.
        function Greeting(name , age = 22){
            return `Hello, my name is ${name} and I am ${age} years old.`;
        }
        Greeting("Raj" , 23) ;

//Activity 5 : Higher Order Functions
    // Task 9 : write a higher-order function that takes a function and a number and calls the function that many times.
        function repeatFunction(fn , times){
            for(let i=0 ; i < times ; i++){
                fn();
            }
        }

    // Task 9 : write a higher-order function that takes two functions and a value . applies the first function to the value , and then apply the second function to the result
    function composeFunctions(fn1, fn2, value) {
        return fn2(fn1(value));
     }

// Example scripts based on the tasks
     // Even or Odd Function Script
    checkEvenOdd(5); // Output: 5 is odd
    checkEvenOdd(8); // Output: 8 is even

    // Square Calculation Function Script
    console.log(calculateSquareNo(4)); // Output: 16

    // Concatenation Function Script
    console.log(concatenateStrings('Hello, ', 'World!')); // Output: Hello, World!

    // Sum Calculation Arrow Function Script
    console.log(sum(3, 7)); // Output: 10

    // Higher-Order Function Script
    repeatFunction(() => console.log('Hello!'), 3); // Output: Hello! (three times)

    const addOne = x => x + 1;
    const double = x => x * 2;
    console.log(composeFunctions(addOne, double, 5)); // Output: 12

// feature Request

    //1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
    function checkEvenOdd(num){
        if(num & 1 === 0){
            console.log(`${num} is an Even Number.`);
        }else{
            console.log(`${num} is Odd Number.`);
        }
    }
    checkEvenOdd(49)

    //2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
        function squareNumber(num){
            return num**2 ;
            // return num*num ;
        }
        let num = 8 ;
        console.log(`Square of ${num} is : ${squareNumber(num)}`);

    //3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
        function add2Strings(str1 , str2){
            // return str1 + str2 ;
            // return `${str1}${str2}`;
            return str1.concat(str2) ;
        }
        let string1 = "abc" ;
        let string2 = "raj"
        console.log(`Concatination of ${str1} and ${str2} are : ${add2Strings(str1 ,str2)}`);

//4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
    const ans = (a,b) => {
        return `${a+b}`
    }
    let x1 = 5 ,x2 = 8 ;
    console.log(`Sum of ${a} and ${b} are : ${result(a,b)}`);

//5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

    function repeatFunction(fn , times){
        for(let i=0 ; i < times ; i++){
            fn();
        }
    }
    repeatFunction(() => console.log('Hello!'), 3); // Output: Hello! (three times)