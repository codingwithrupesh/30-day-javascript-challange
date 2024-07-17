//ACTIVITY 1 : if-else statement  
    //Task 1 : check if a number is positive , negative and zero(0) and log the result on the console .  
    function checkNo(num){
        if(num > 0){
            console.log(`${num} is Positive .`);
        }else if(num < 0){
            console.log(`${num} is Negative .`);
        }else{
            console.log(`${num} is Zero .`);
        }
    }
    checkNo(0)

    //Task 2 : Check if a person is eligible is for vote (age >= 18 ) and log the result on the console.  
    function eligibleForVote(age){
        if(age >= 18){
            console.log(`This Voter age is >= ${age} so eligible for vote.`);
        }else{
            console.log(`This Voter age is < ${age} so This voter is not eligible for vote` );
        }
    }
    eligibleForVote(18)

// Activity 2 : Nested if-else condition
    // Task 3 : find Largest of 3 numbers and log the result on the console. 
        function findLargestNo(num1 , num2 , num3){
            if(num1 > num2 && num1 > num3){
                console.log(`${num1} is the largest among ${num1},${num2},${num3}`);
            }else if(num1 < num2 && num2 > num3){
                console.log(`${num2} is the largest among ${num1},${num2},${num3}`);
            } else{
                console.log(`${num3} is the largest among ${num1},${num2},${num3}`);
            }
        }
        findLargestNo(5,5,5)
// Activity 3 : Switch Case  
    //Task 4 : write a program that uses a **switch case** to determine the day of the week based on the number (1-7) and log the day name to the console. 
    function getDayOfWeek(dayNumber){
        let day ;
        switch(dayNumber){
            case 1 : 
                day = "Sunday"
                break ;
            case 2 : 
                day = "Monday"
                break ;
            case 3 : 
                day = "Tuesday"
                break ;
            case 4 : 
                day = "Wednesday"
                break ;
            case 5 : 
                day = "Thrusday"
                break ;
            case 6 : 
                day = "Friday"
                break ;
            case 7 : 
                day = "Saturday"
                break ;
            default : 
                day = "Invalid day Number"
        }
        console.log(day);
    }
    getDayOfWeek(5)


    //Task 5 : write a program that uses a **switch case** to assign a grade ('A', 'B', 'C', 'D' , 'F') based on their score and log the grade to the console.  
        function getGrade(score){
            let grade ;
            switch(true){
                case (score >= 90) :
                    grade = 'A' ;
                    break ;
                case (score >= 80) :
                    grade = 'B'
                    break ;
                case (score >= 70) :
                    grade = 'C'
                    break ; 
                case (score >= 30 && score < 70 ) :
                    grade = 'D'
                    break ;
                default : 
                    grade = "F"
            }
            console.log(`Student score is ${score}. and grade is ${grade}.`);
        }
        getGrade(56)

// Activity 4 : Conditional **(Ternary)** Operator  \
    //Task 6 : use a ternary operator to check if a number is even or odd and log the result on the console. 
        function checkEvenOdd(num){
            if(num & 1 == 0){
                console.log(`${num} is Even .`);
            }else{
                console.log(`${num} is Odd .`);
            }
        }
        checkEvenOdd(55)

//Activity 5 : Combaining conditions
    //Task 7 : WAP to check if a year is leap year using multiple conditions (divisible by 4 but not 100 unless also divisible by 400 ) and log the result on the console.
        function checkLeapYear(year){
            if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
                console.log(`${year} is a Leap Year.`);
            }else{
                console.log(`${year} is a Not Leap Year.`);
            }
        }
        checkLeapYear(2004)

// Feature Requests  
    // 1.Number Check Script : Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.  
        function checkNumber(num){
            if(num > 0){
                console.log(`${num} is Positive.`);
            }else if(num < 0 ){
                console.log(`${num} is Negative.`);
            }else{
                console.log(`${num} is Zero.`);
            }
        }
        checkNumber(-22)
        
    // 2.Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
        function eligibleForVoting(age){
            if(age >= 18){
                console.log(`age is : ${age} Therefore Eligible for Voting. `);
            }else{
                console.log(`age is : ${age} Therefore Not Eligible for Voting. `);
            }
        }
        eligibleForVoting(17)
        
    //3.Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name. 
    function getDayOfWeek(dayNumber){
        let day ;
        switch(dayNumber){
            case 1 : 
                day = "Sunday"
                break ;
            case 2 : 
                day = "Monday"
                break ;
            case 3 : 
                day = "Tuesday"
                break ;
            case 4 : 
                day = "Wednesday"
                break ;
            case 5 : 
                day = "Thrusday"
                break ;
            case 6 : 
                day = "Friday"
                break ;
            case 7 : 
                day = "Saturday"
                break ;
            default : 
                day = "Invalid day Number"
        }
        console.log(day);
    }
    getDayOfWeek(5)
        
    //4.Grade Assignment Script:  
        //Create a script that uses a switch case to assign a grade based on a score and logs the grade.
        function getGrade(score){
            let grade ;
            switch(true){
                case (score >= 90) :
                    grade = 'A' ;
                    break ;
                case (score >= 80) :
                    grade = 'B'
                    break ;
                case (score >= 70) :
                    grade = 'C'
                    break ; 
                case (score >= 30 && score < 70 ) :
                    grade = 'D'
                    break ;
                default : 
                    grade = "F"
            }
            console.log(`Student score is ${score}. and grade is ${grade}.`);
        }
        getGrade(56)
        
    //5.Leap Year Check Script: 
        //Write a script that checks if a year is a leap year using multiple conditions and logs the result.
            function isLeapYear(year) {
                if (year % 4 === 0) {
                  if (year % 100 !== 0 || year % 400 === 0) {
                    console.log(`${year} is a Leap Year`);
                  } else {
                    console.log(`${year} is Not a Leap Year`);
                  }
                } else {
                  console.log(`${year} is Not a Leap Year`);
                }
              }
              
              isLeapYear(2001);