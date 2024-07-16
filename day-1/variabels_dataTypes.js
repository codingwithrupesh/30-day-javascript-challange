// Activity 1: variable Declaration 
    //Task 1 : Delcalre a variable using var , assign it a number and log the value to the consoole

        var num = 57 
        console.log(num);   // Output 57

    // Task 2 : Declare a variable using let, assign it a string and log the value to the console.
        let str = "Raj"
        console.log(str);   // Output Raj

// Activity 2 : Constant Declaration 
    // Task 3 : Declare a variable using const , assign it a boolean value and log the value to the console.
        const flag = true 
        console.log(flag);  // Output true

// Activity 3 : Data Types
    // Task 4 : Create variables of different data types (number , string, boolean, object, array) and log each variable's type using the typeOf operator
    
        let N = 50
        let str1 = "Rupesh"
        const value = false 
        var obj = {name : "Rupesh",
            age : 22 ,
            gender : "male"
        } 
        let arr = [1,2,3 , "Raj" , false , {name : "Raj" ,
            age : 22
        }]
        console.log(typeof(N));  //    number
        console.log(typeof(str1));  //  string
        console.log(typeof(value));  // boolean
        console.log(typeof(obj));  // object
        console.log(typeof(arr));  // object

// Activity 4 : Reassigning Variables
        // Task 5 : Declare a variable using let , assign it an initial value , reassign a new value , and log both values to the console.
        let myVariable = 53 ;
        console.log(myVariable);  // Output 53
        myVariable = 5 ;
        console.log(myVariable);    // Output 5

//Activity 5: Understanding const
    //Task 6: Try reassigning a variable declared with const and observe the error.
    const myConstant = 100 ;
    console.log(myConstant);  //Output : 100 
    // myConstant = 200  //  This will cause an error : TypeError: Assignment to constant variable.
    
//Feature Request
    // 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
        let myNum = 10 ;
        let myStr = "Raj"
        let bool = true 
        let myObj = {name : "Raj" , age : 22 };
        let myArr = [1,2,3]

        console.log(myNum , typeof myNum);  // 10 number
        console.log(myStr , typeof myStr);  // Raj string
        console.log(bool , typeof bool);    // true boolean
        console.log(myObj , typeof myObj);  // { name: 'Raj', age: 22 } object
        console.log(myArr , typeof myArr);  // [ 1, 2, 3 ] object

    // 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
        let reassignable = "initial value";
        console.log(reassignable); // Output: initial value
        reassignable = "reassigned value";
        console.log(reassignable); // Output: reassigned value
        
        const immutable = "constant value";
        console.log(immutable); // Output: constant value
        // immutable = "new value"; // This will cause an error: TypeError: Assignment to constant variable.

