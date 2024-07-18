// Activity 1 : Array Creation and Access
    // Task 1 : create an array of numbers from 1 to 5 and log the array to the console.
        let arr = [1,2,3,4,5]
        console.log(arr);
        
    // Task 2 : Access the first and last element of array and log them to the console.
        console.log(`First element of array is ${arr[0]} and Last Element of the Array is  : ${arr.length}`)

// Activity 2 : Array methods (Basic)
    // Task 3 : Use the **push** mehtod to add a new number to the end of the array and log the updated array ;
        arr.push(7) ;
        console.log(arr);
    // Task 4 : Use the **pop** method to remove the last element from the array and log the updated array.
        arr.pop()
        console.log(arr);
    // Task 5 : Use the **shift** method to remove the first element from the array and log the updated array 
        arr.shift(6)
        console.log(arr);
    // Task 6 : Use the **unshift** mehtod to add a new number to the begining of the array and log the updated array.
        arr.unshift(4)
        console.log(arr);

// Activity 3 : Array Methods(Intermediate)
    // Task 7 : Use the **map** method to create a new array where each number is doubled and log the new array.
        const doubleArray = arr.map((number) => number * 2);
        console.log(doubleArray);
    // Task 8 : Use the **filter** method to create a new array with only even numbers and log the new array.
        const evenArray = arr.filter((number) => number % 2 === 0)
        console.log(evenArray);
    // Task 9 : Use the **reduce** method to calculate the sum of all numbers in the array and log the result.
        const sum = arr.reduce((acc , currValue) => acc+currValue , 0 );
        console.log(`Sum of all Array Element is : ${sum}`);

// Activity 4 : Array Iteration 
    // Task 10 : use a **for** loop to iterate over the array and log each element to the console.
        for(let i=0 ; i < arr.length ; i++){
            console.log(`Array element index is ${i} : ${arr[i]} `);
        }
    // Task 11 : use the **forEach** Method to iterate over the array and log each element to the console.
        arr.forEach(element => {
            console.log(`Array element is : ${element}`);
        });

// Activity 5 : Multi-Dimesional Arrays
    // Task 12 : create a 2 Dimensional array (matrix) and log the entire array to the console.
        let Array_2D = [[1,2,3,4],[2,5,6,7,8]]
        console.log(Array_2D);
    // Task 13 : Acces and log a specific element from the 2 dimensional array.
        const value = Array_2D[1][2]; // This will be 6
        console.log(value);

// Feature Request 
    // 1.Array Manipulation Script : write a script that demonstrates the Creation of an Array , adding and removing elements using push, pop , shift and unshift methods.
        let newArray = [5,7,3,7,8,4] ;
        newArray.push(2)
        newArray.push(5)
        newArray.pop()
        newArray.shift(6)
        newArray.unshift()
            
    // 2.Array Transformatin Script : Create a script that uses map , filter and reduce methods to transform and aggregate array data.
        const addOne = newArray.map((num) => num + 1)
        const oddArray = newArray.filter((num) => num % 2 === 1)
        const GreatestElement = newArray.reduce((prev ,curr) => (prev > curr ? prev : curr))
        console.log(GreatestElement);
            
    // 3. Array Iteration Script : Write a scripts that iterate over an array using for and forEach methods and log the each element.
    // for Loop
        for(let i=0 ; i < arr.length ; i++){
            console.log(`Array element index is ${i} : ${arr[i]} `);
        }
        // ForEach Loop
        newArray.forEach(num =>{
            console.log(`Array element is : ${num}`);
        } ) 
    // 4. Two-Dimensional Array Script : Create a script that demonstrate the creatin and Manipulation of two-dimensional array.

        // Create a 2D array (matrix)
            const rows = 3; // Number of rows
            const cols = 4; // Number of columns
            const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

        // Initialize values in the matrix
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = i * cols + j + 1;
                }
            }

        // Print the matrix
            console.log("2D Array (Matrix):");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i]);
            }

        // Access and modify elements
            const rowToModify = 1;
            const colToModify = 2;
            matrix[rowToModify][colToModify] = 42;

        // Print the modified matrix
            console.log("Modified Matrix:");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i]);
            }
