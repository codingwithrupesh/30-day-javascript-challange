// Activity 1 : Object Creation and Access
    // Task 1 : create an object representing a book with properties like title , author ,  and year and log the object to the console.
        let book = {
            title : "Think and Grow Rich",
            author : "Napolean Hills" ,
            year : 2000
        }
        console.log(book);

    // Task 2 : Access and log the title and author properties to the console.
        console.log(`Title of the Book is : ${book.title} and author is ${book.author} .`);

// Activity 2 : Object Methods
    // Task 3 : add a method to a book objects and returns a string with book's title and author and log the result of calling this method.
        function getBookInfo(){
            const info = `Title of the Book is : ${book.title} by ${book.author}`;
            console.log(info);
        }
        getBookInfo()
    // Task 4 : add a method to a book object that takes a parameter (year) and update the book's year property , then log the updated objects.
        function updateBookInfo(year){
            book.year = year ;
            console.log(book);
        }
        let year = 2005 
        updateBookInfo(year)


// Activity 3 : Nested Objects
    // Task 5 : Create a nested Objects representing a Library with properties like name and books (an array of book objects) . log the library object to the console.
        let library = {
            name: "City Library",
            books: [
            {
                title: "Hack The Tech",
                author: "Rajat Grover",
                year: 2010
            },
            {
                title: "Think and Grow Rich ",
                author: "Nepolean Hill",
                year: 1990
            },
            {
                title: "Rich Dad Poor Dad",
                author: "Robart T.Kiosaki",
                year: 1985
            }
            ]
        };
        
        console.log(library);
      
        // Task 6 : Access and log the name of the Library and title's of all the books in the library.
            library.books.forEach(book =>{
                console.log("Book title : ", book.title);
            })
        
// Activity 4 : **this** keyword
    // Task 7 : add a method to the book objects that uses the **this** keyword to return a string with the book's title and year and log the result of calling this method.
    book.Info = function () {
        console.log(`Book's Tilte : ${this.title} and Book's year : ${this.year}.`);
    }
    book.Info()

// Activity 5 : Object Iteration 
    // Task 8 : use a **for...in** loop to iterate over the properties of the book object and log each property and it's value.
        console.log(`Task 8 : All The properties through for...in Loop`);
        for (let key in book) {
        if (book.hasOwnProperty(key)) {
            console.log(`${key}: ${book[key]}`);
        }
        }
    // Task 9 : use **Object.keys** and **Object.value** method to log all the keys and values of the book object.
    console.log(`Task 9 : All Keys and Values of Book Object.`);
    console.log(`All the Keys are : ${Object.keys(book)}`);
    console.log(`All the Values are : ${Object.values(book)}`);

// Feature Request 
    // 1. **Book Object Script** : write a script that creates a book objects , add method's to it and logs it's properties and method results. 
           
    // 2. **Library Object Script** : Create a script that defines a library objects containig an array of book objects and logs the Library details.

    // 3. **Object Iteration Script** : write a script that demonstrates iterating over an object's properties using **for...in** loop and **Object.keys/Object.values** .
    
    // All the Feature Activity task is covered in the above task .