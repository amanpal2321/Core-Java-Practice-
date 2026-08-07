// // null : is an intentional absence of value ( Set by you ); undefined means a variable exists but hasn't been assigned a value yet (set by javaScript)
// const  num1 = +prompt("Enter first Number");
// const num2 = +prompt("Enter Second Number");
// const num3 = +prompt("Enter Third Number");
// let res = 0;
// // if(num1 > num2 && num1 > num3 ){
// //     res = num1
// //     }else if(num2 > num3){
// //     res = num2
// //     }else{
// //     res = num3
// //     }
//     const re = num1>num2?num1:num2>num3?num2:num3;
// console.log(Biggest of three number ${num1} , ${num2} , ${num3} is ${re});
// debugger
// function sum(a, b){
//     const c = a + b;
//     console.log(c);
//     }
// let  z = sum(10,30);
// console.log(z);



// const x = function(a,b){
//     z = a+b;
//     console.log(z);
    
// }
// let a = x(12,20)
// console.log(a);


// !Immediately Invoked Function Expression(IIFE)

// ! First-class function treated as values - can be assigned to variables ,passed as arguments, and return from other functon.
// ! IIFE : A Function that defines and executes itself immediately ,used to create private scope and avoid polluting the global namespace

// const x = (function modal(username){
//     console.log(welcome ${username});
//     const res = confirm("Do you Want to share your location?");
//     return res;
// })("Avinash")
// console.log("x : ", x);

// const sum = (a,b) => a + b;
// const x =sum(10,15);
// console.log("x :",x);

// what is arrow function? why we use arrow function in js?
// 1. An arrow function is just a shortcut way to write a function in javascript.
// 2. It doesn't have its own this - it borrrows this from wherever it was written.

// why we use arrow function in js?
// 1. for cleaner syntax and contex
// 2. Avoid this confusion in callback

// # Higher order funtion :-
// 1) the function which accepts another function as an arguments.
// 2) the function which returns another function

// # Callback funnction 
// 1) the function which is passed to another function as an argument
// 2) the function which is returned from inside a function 
//  Example 1
// debugger
// function greet (username , cb){
//    const res =  cb(username);
//    console.log(res);
   
// }
// const y = greet("sid",(fullname) => console.log(Good Morning ${fullname}))
// console.log(y);


// Example 2
// function greet(){
// const cb = (fullname) => console.log(Hello ${fullname});
// return cb;
// }
// const x = greet();
// console.log(typeof x);
// x();

// debugger
// const company = (emp,task) =>{
//     console.log("Company Function");
//     const y = task(emp)
//     console.log("y : ",y);
      
// }
// const x = company("Avinash" , (fullname) => {
//                                              console.log(`${fullname} : is joined as software Developer`);
//                                              return "Hello";
//                                              });
// console.log("x : ",x);

// What is Closure ?
// A closure is a function that "remembers" the variables fro its outer (enclosing) scope even after that outer function has finished execution

// example
// debugger
// function outer(){
//     let count = 0;  // the variable is "closed over"

//     return function inner(){
//         count++;
//         console.log(count);
        
//     }
// }

// const counter = outer(); //outer() has finished, but...
// counter();

//disadvantages:-
//High memory consumption


// clouser Example
// function outer(){
//     console.log("outer Function");
//     const a = 10;
//     const b = 20;
//     const inner = (){
//         console.log("Inner Function");
//         console.log(a);
//     }
//     return inner;
// }
// const x = outer();
// console.log(typeof x);
// x();

//clouser function:-
// debugger
// function outer(){
//     console.log("Outer Fn");
    
//     const inner = () => {
//         console.log("Inner Fn");

//         const child = () => {
//             console.log("Child Fn")
//         }
//         return child;
//     }
//     return inner;
// }
// const x =outer()()();
//     console.log("x:",x);

//**
//!Interview Question
// 1. What is Js? what is JRE ? what is JS English?
// 2.differnce between async and defer?
// 3.What is Token? what is Literals and their types?
// 4.what is Hosting and Temporal Dead zone?
// 5.Difference between ver, let and const?
// 6. what is clouser? diadvantage of clouser?
// 7.what is function in js? why we use function?
// 8.what is arrow function? what is implicit and explicit return type?
// 9.what is Higher order function and callback function?
// 10.what is IIFE and how many times iife should run?
// 11.what is nested function?
//  */

//! Lexical Scope:-
//1. The ability of an inner function to access variable and functions defined in its outer function 
//  or parent function, but not the other way around.

//2.Lexical scope means a variable's accessibility is determined by where it's written in the code - inner
//  functions can access variables from their outer functions, but not vice versa.


//!Array:- 
     //   1. Array is an object in js.
    //    2. It is non-primitive type of literal.
    //    3. It is a block of memory which is used to store multiple type of value (any type of literal) in same block.
    //    4. Array size is dynamic, itb means we can store heterogeneous types of data and n number of data.
    //    5. values stored inside array are referred as array elements.


    //! Examples of Array
    // // Empty Array
    // const arr1 = [];

    // // Array with Literals
    // const arr2 = [10,20,30,];

    // const movies = [ "ab" , " cd"]

    // const x = movies.push("ef")
    //  console.log(movies)
    //   console.log(x)

      //!Methods
      //!1. push():-1. it is used to instert element at last of array.
                //2.- It returns the updated length of an array.
                //3. It modify original array.
    //   const arr = [10,20,30];
    //   const x = arr.push(40,50,60);

    //   console.log("arr:", arr);
    //   console.log("x:", x);


      //!2. pop():- 1.It is used to delete elements from last index of an array.
                // 2.It returns deleted elements.
                // 3. It modify original array.
    //   const arr = [10,20,30,400];
    //   const x = arr.pop()

    //   console.log("arr:",arr); //[10,20,30]
    //   console.log("x:", x);


      //!3. Unshift() :-1. It is used to insert element at first index of an array.
                    // 2.It return the updated array length.
                    //3. It modify the orginal array
    //  const arr = [20,30,40,50];
    //   const x = arr.unshift(10);


    //  console.log("x:", x);
    //   console.log("arr:",arr); 
      

      //!4. Shift() :- 1. It is udes to delete element from first index of an array
                    //2. It returns deleted elements.
                    //3. It modify the original array.
                    
        //  const arr = [100,20,30,40,50];
        //  const x = arr.shift()
        //  console.log("a:", a);
        //  console.log("arr:", arr)
            

      //!5.Slice(starting index and ending index+1) :- 1. It is used to copy array elements.
                  //2. It will modify the original array.
                  //3. It returns array of copied elements.

            //       const skills = ["java", "js", "ts", "react", "sql"];
            // index                 0      1     2      3       4

            // const uiskills = skills.slice(1,4)
            // console.log("uiskills:", uiskills);
            
      //!6. splice(a,b,c):-
          // a= starting index.
          // b= count no of elements to be deleted.
          // c= new values to be added.

       //1. It can performs insertion, deletion, updation in array.
       //2. It returns array of deleted elements.
       //3. It will modify the orginal array.
       
          //! * Insertion
          //  const arr = [10,20, 40];
          //  const a = arr.splice(2,0,30,40);
          //  console.log("a:", a);        //Empty array
          //  console.log("arr:",arr);     //10,20,30,40
          //! * Deletion
          // const arr = [10,700,20,30];
          //  const a = arr.splice(1,1);
          //  console.log(x);        //700
          //  console.log(arr);     //10,20,30
           
          //! * Updation
          //   const arr = [10,20,300,400,50];
          //  const a = arr.splice(2,2, 30, 40);
          //  console.log(arr);      //10,20,30,40,50
          //  console.log(arr);     //300,400
           
       //!7. indexOf(search value, starting value)
          // 1. It is used to index of array element.
          // 2. If element is available ---> returns element's index.
          // 3. If element is not available ---> returns -1.

          // const arr = ["html", "css", "js", "ts", "react"];

          // const x = arr.indexOf("html");
          // const y = arr.indexOf("css");
          // const z = arr.indexOf("ts");
          // const a = arr.indexOf("angular");

          // console.log("a:",a);


        //!8. includes(search value, starting index)
        // 1. It check values is prasent inside array or not.
        // 2. It returns boolean value true/false.

        // const actors = ["Ranveer Singh", "Hrithik Roshan", "Vicky Kaushal", "SRK"];
        // const a = prompt("Enter actor's name");  // a = "SRK"
        // const isAvailable = actors.includes(a);
        // console.log("isAvailable:", isAvailable); //true
          
        

          
      //!9. reverse
         // 1. It is used to reverse the array
         // 2. It will modify the original array.

        //  const arr = [10,20,30,40,50];
        //  const x = arr.reverse();
        //  console.log("arr",arr);



      //!10. sort(call back)
          //1. It will modify the orginal array.
          //2. if callback returns -ve value ---> it will sort in ascending order.
          //3. if callback returns +ve value ---> it will sort in decending order.
          //4. if callback returns 0 value   ---> it will no sort.

          // const arr = [50,40,30,20,10];

          // arr.sort((a,b) => a - b);
          // console.log(arr);
          

      //!11. forEach(callback)
        //1. It is a higher order function.
        //2. It is used to iterate over array elements and index.
        //3. It doesnot return anything , so js engine emplicitly returns undefined.
            
        // const output = [];
        // const arr = [1,2,3,4,5];

        // const x = arr.forEach((element,index) => {
        //   output.push(element + 10);
        // });

        // console.log("output", output);  // [11,12,13,14,15]
        // console.log("x", x);


      //!12. map(callback)
         //1.It is a higher order function.
         //2.{item: "Lays", price: 25},
         //3.it will always modify original array
         //4.it returns new array
         //5.The value returnd by callback function will be inserted in new array, if it doesnot returns 
         // anything 'undefined' will be stored.



      //!13. filter(callback)
           //1. It is a higher order function.
           //2.{item: "Lays", price: 25},
           //3.it will not modify original array
           //4.it returns new array
           //5.Here, elements will be inserted in new array only when callback function returns true.

           /** 
 /** 
 * ! find(callback)
 * 
 * ! Difference between the filter and find
 * 
 * ? find
 * 1) return the first matching element(not an array)
 * 2) return undefined if no match is found
 * 3) stop iterating as soon as the first match is found(faster)
 * 
 * ?filter
 * 1) returns a new array of all matching elements
 * 2) returns an empty array if no matches is found
 * 3) iterates through the entire array regardless of matches
 */


/**
 * ! 14) reduce 
 * 
 * Example
 * const = [10,20,30,40,50];
 * const z = arr.reduce((acc,element) =>{
 * acc = acc + element;
 * return acc;
 * },0)
 * console.log("z : " ,z) //150
 */

/**
 *  ! 15) some(callback)
 * ? 1. It is used to check if at least one element in the array satisfies the condition specified in the callback function.
 * ? 2. It returns a boolean value (true/false).
 * ? 3. It will not modify the original array.
 * ? 4. It will sleep iterating as soon as it finds the first element that does not satisfy the condition (more efficient than some for large array).
 * 
 * const arr = [10,20,30,40,50];
 * const x = arr.some((element) => element > 25);
 * console.log("x : ",x); // true 
 * 
 * ! 16) every(callback)
 * ? 1. It is used to check if all elements in the array satisfy the condition specified in the callback function.
 * ? 2. It returns a boolean value (true/false).
 * ? 3. It will not modify the original array.
 * 
 * const arr = [10,20,30,40,50];
 * const x = arr.every((element) => element > 25);
 * console.log("x : ",x); // false
 * 
 * ! 17) flat(depth)
 * ? 1. It is used to flatten nested arrays into a single array.
 * ? 2. The depth parameter specifies how deep the flattening should go (default is 1).
 * ? 3. It will not modify the original array.
 * 
 * const arr = [1,2,[3,4],[5,[6,7]]];
 * const x = arr.flat(2);
 * console.log("x : ",x); // [1,2,3,4,5,6,7]
 * 
 * ! 18) flatMap(callback)
 * ? 1. It is used to first map each element using a callback function and then flatten the result into a new array.
 * ? 2. It is equivalent to using .map() followed by .flat(1).
 * ? 3. It will not modify the original array.
 * 
 * const arr = [1,2,3];
 * const x = arr.flatMap    ((element) => [element, element * 2]);
 * console.log("x : ",x); // [1,2,2,4,3,6]    
 */
 
     if({}){
      
     } 
    
      //!19>.
      //20.
      //21.
      //22.
    
 