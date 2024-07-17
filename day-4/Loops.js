// Activity 1 : For Loops 
    // Task 1 : print number from 1 to 10 .
        function print1To10(){
            let output = "" ;
            for(let i = 1 ; i <= 10 ; i++ ){
               output += `${i} `   
            }
            console.log(`Print 1 to 10 are : ${output.trim()}`);
        }
        print1To10()

    // Task 2 : print the multiplication table of 5 using for loop.
        function tableOf5(num){
            let table = "";
            for(let i=1 ; i<= 10 ; i++){
                table += `${num * i}  `
            }
            console.log(`Print Table of ${num} are : ${table.trim()}`);
        }
        tableOf5(5)
// Activity 2 : While Loop
    //Task 3 : calculate the sum of numbers 1 to 10 using while loop.
        function sumOf1to10(){
            let i = 1;
            let sum = 0 ;
            while(i <= 10){
                sum += i ;
                i++ ;
            }
            console.log(`Sum of 1 to 10 are : ${sum}.`);
        }
        sumOf1to10()

    //Task 4 : print from 10 to 1 using while loop.
        function print10To1(){
            let i = 10;
            let ans = ""
            while(i > 0){
                ans += `${i}  ` ;
                i-- ;
            }
            console.log(`Print 1 to 10 numbers are : ${ans.trim()}`);
        }
        print10To1()

// Activity 3 : do...While Loop
    // Task 5 : print numbers from 1 to 5 using do...while loops
        function print1To5(){
            let i = 1 ;
            let result = ""
            do{
                result += `${i}  `
                i++ ;
            }while(i <= 5)
            console.log(`Print numbers from 1 to 10 are :  ${result.trim()}`);
        }
        print1To5()

    // Task 6 : calculate the factorial of a number using do...while loop
        function calculateFactorial(num){
            let fact = 1 ;
            let i = 1 ;
            do{
                fact *= i ;
                i++ ; 
            }while(i <= num)
            console.log(`Factorial of ${num} is : ${fact}`);
        }
        calculateFactorial(5)

// Activity 4 : Nested Loop
    //Task 7 : print a pattern using nested loop 
    function halfPyramidPattern(n){
        console.log(`Half Pyramid of level ${n} : `);
        for(let i=0 ; i<n ; i++){
            let star = "";
            for(let j = 0 ; j <= i ; j++){
                star += `* `
            }
            console.log(star.trim())
        }
    }
    halfPyramidPattern(5)

// Activity 5 : Loop Control Statements
    // Task 8 : print numbers from 1 to 10 but , skip the number 5 using continue statement .
    function print1To10Skip5(){
        let ans = ""
        for(let i=1 ; i <= 10 ; i++){
            if(i === 5){
                continue ;
            }
            ans += `${i} `
        }
        console.log(`Print 1 to 10 but Skip 5 : ${ans.trim()}`);
    }
    print1To10Skip5()

    // Task 9 : print numbers from 1 to 10 , but stop the loop when the number is **7** using **break** statement.
        function print1To10vutBreakOn7(){
            let ans = ""
            for(let i = 1; i <= 10 ; i++ ){
                if(i === 7){
                    break ;
                }
                ans += `${i} `
            }
            console.log(`Print 1 to 10 but stop the loop when number is 7 : ${ans.trim()}`);
        }
        print1To10vutBreakOn7()

// Feature Requests
    // 1.Number Printing Script: Write a script that print number from 1 to 10 using for loop and while loop. 
        function print1To10usingFor(){
            let output = "" ;
            for(let i = 1 ; i <= 10 ; i++ ){
            output += `${i} `   
            }
            console.log(`Print 1 to 10 using For loop : ${output.trim()}`);
        }
        print1To10usingFor()

        function print1to10usingWhile(){
            let output = "" ;
            let i = 1 ;
            while(i <= 10){
                output += `${i} `
                i++ ;
            }
            console.log(`Print 1 to 10 using While loop : ${output.trim()}`);
        }
        print1to10usingWhile()

    // 2. Multiplicatin Table Script: Create a script that prints the multiplications table of 5 using for loop.
        function tableOf5(num){
            let table = "";
            for(let i=1 ; i<= 10 ; i++){
                table += `${num * i} `
            }
            console.log(`Print Table of ${num} are : ${table.trim()}`);
        }
        tableOf5(5)

    // 3. Pattern Printing Script: Write a script that prints a pattern of stars using Nested Loops.
    function reverseHalfPyramidPattern(n){
        console.log(`Reverse Half Pyramid of level ${n} : `);
        for(let i=0 ; i<n ; i++){
            let star = "";
            for(let j = i+1 ; j <= n ; j++){
                star += `* `
            }
            console.log(star.trim())
        }
    }
    reverseHalfPyramidPattern(5)

    // 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using while loop .
        function sumOf1to10(){
            let i = 1;
            let sum = 0 ;
            while(i <= 10){
                sum += i ;
                i++ ;
            }
            console.log(`Sum of 1 to 10 are : ${sum}.`);
        }
        sumOf1to10()

    // 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using do...while loop.
        function calculateFactorial(num){
            let fact = 1 ;
            let i = 1 ;
            do{
                fact *= i ;
                i++ ; 
            }while(i <= num)
            console.log(`Factorial of ${num} is : ${fact}.`);
        }
        calculateFactorial(5)

        
