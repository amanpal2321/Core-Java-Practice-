// //! PRINTING STATEMENTS
// // 1> document.write() <-- deprecated, print data on UI

// //document.write("Hello")


// // 2> document.writeln() :- to print data on viewport/UI 

// //document.writeln("<em>Byee</em>")

// // 3> console.log():- to print data on console Window

// //console.log("Hello World");

// //----------------------------------------------------------------------------------------------------------------------------------------//

// //! TOKEN :- smallest unit of any programming language
// // There are 4 types of token

// //1> Keywords:- predefined words which has specific meaning. All keywords must be in lowercase. eg- if, else, var, let, const etc.....

// //2> Identifires:- Name given to a class, variables, functions etc.....

// //3> Literals / Values:- data store into a variable

// //4> Operators:- used to perform some operation between operands 

// //--------------------------------------------------------------------------------------------------------------------------------------//

// //! DATATYPES

// // There are 2 Types

// //   1>Primitive : call by value(immutable)
// //       - number
    
//     var a1 = 10
//     console.log(a1);//a1
//     console.log(typeof a1); // number





// //       - string

//   var a2 = "Hello World"
//   console.log(a2);// a2
//   console.log(typeof a2);  // string

// // Adavnatge of using backticks
// //1> Multi-line String
// //2> String interpolation using ${}
//   var a3 = `Hey There !!!
//   Welcome to Javascript class ${a2}`
//   console.log(a3);
//   console.log(typeof a3); //String


// //       - boolean

// var a4 = true
// console.log(a4);  //true
// console.log(typeof a4); //bollean

// console.log(typeof typeof a4); ///String

// //       - undefined

// // - udefined : default value provided by js-engine implicityly
// var a5;
// console.log(a5);  //undefined
// console.log(typeof a5);  //undefined


// //       - null :- provied by Developers intentionally

// var a6 = null;
// console.log(a6); //null
// console.log(typeof a6);  //object


// //       - bigint  (-2^53 - 1 to 2^53 - 1)
 
// var a7 = 1n
// console.log(a7);
// console.log(typeof a7);  //bigint



// //       - symbol

// var a8 = Symbol("Hello")
// var a9 = Symbol("Hello")

// console.log(a8);
// console.log(a9);

// console.log(a8 == a9); //false

// //! difference between  == and ===

// var n1 = 10
// var n2 = "10"

// console.log(n1 == n2);  //true, check data not datatype
// console.log(n1 === n2);  //false, check data and datatype

// //   2>Non-Primitive : call by reference(mutable)
// //       - object
// var obj = { firstname : "Aman", lastname : "Pal" }
// console.log(obj);
// console.log(obj.firstname, obj.lastname); // Aman Pal
// console.log(typeof obj); // Object


// //       - array
// var arr = [10, 20, 30, 40];
// console.log(arr);
// console.log(arr[2]);//30
// console.log(typeof arr); //object




// //       - function
// function greet(){
//     console.log("Welcome")
// }
// greet()
// console.log(typeof greet); //function

// var specialNumber = "Hello" * 10;
// console.log(specialNumber); // NaN
// console.log(typeof specialNumber); // Number


// //!Mutable and immutable example
// var str = "Hello"
// str[0] = "J"
// console.log(str);//Hello   (beacuse it is immutable)

// var arr1 = [10, 20, 30];
// arr1[0] = 100;
// console.log(arr1); // [100,20,30] <-- mutable


// //! hoisting:- moving declaration part at the top of the code internally

// console.log(a); //ud(undefined), due to hoisting
// var a = 10;
// console.log(a); //10
 
// //! Difference between var, let const
//   // var example

//   var a; // declaration
//   console.log(a); //ud

//   a = 10; //initialization
//   console.log(a); // 10

//   var a; //re-declaration

//   a = 20  //re-initialiaztion

//   console.log(a); //20

//   var a1 = 30; //declare and initialize

//   console.log(a1); //30

//   var a1 = 40; //re-declare and re-initialize
//   console.log(a1); //40

//   //! let example 
//   let b; //decelaration

//   console.log(b); //ud

//   b = 100;
// console.log(b); //100

// // let b //! cannot redeclare

// b = 200

// console.log(b); //200

//  //! const example

//  const c = 500; //declare and initialize

//  console.log(c);

//  //!Temporal Dead Zone : The period between accessing leat and const variable before declaration

//  //var x = undefined
//  //let y <-- TEMPORAL DEAD ZONE(TDZ)
//  //const z <-- Temporal dead zone(tdz)

//  console.log(x); //ud

//  //console.log(y); //! error -> cannot access before initialization
//  //console.log(z); //! error -> cannot access before initialization
//  var x =10;
//  let y = 20;
//  const z =30;

//  console.log(x);//10
//  console.log(y);//20
//  console.log(z);//30

//  debugger
 
//  var n1 = 10;
//  let n2 = 20;
//  const n3 = 30;

//  console.log(n1, n2, n3);
//! Example 2
//  debugger;
// console.log(a); //ud
// var a;
// console.log(a); //ud
// let b;
// console.log(b);// ud
// const c = 100;
// console.log(a,c); // ud 100

//! TYPES OF VARIABLES AND ITS SCOPE

//! 1) GLOBAL VARIABLES

// - A variables which is declared outside of conditional or loops OR functions (GLOBALLY) are known as Global Variables 
// - It can be accessed anywhere in the code
//  var a1 = 10 //GLOBAL VARIABLE - GLOBAL SCOPE
//  let a2 = 20 //GLOBAL VARIABLE - SCRIPT SCOPE <-- TDZ
//  const a3 = 30 //GLOBAL VARIABLE - SCRIPT SCOPE <-- TDZ

//  if (3 == 3){
//     console.log(a1, a2, a3);
//  }

//! 2) LOCAL VARIABLES 
//  debugger
// if(10 > 2){
//     var b1 = 100 //GLOBAL VARIABLE - GLOBAL SCOPE
//     let b2 = 200 //LOCAL VARIABLE - LOCAL SCOPE
//     const b3 = 300 //LOCAL VARIABLE - LOCAL SCOPE
// }
// console.log(b1); //100
// console.log(b2); //! b2 is not defined

// function demo(){
//     var c1 = 1000//LOCAL variable - local scope
//     let c2 = 2000//LOCAL variable - local scope
//     const c3 = 3000//LOCAL variable - local scope
//     console.log(c1, c2, c3);
// }
// demo()
// console.log(c1);//! c1 is  not defined

//! FUNCTIONS : reuseable block of code used to perform specific task

// There are 10 types of functions:
//! 1) NAMED FUNCTION: a function which has name
//! NOTE: We call named function before declaration due to function hoisting. Function Hoisting only accurs in Named Function

    // function greet(){
    //     console.log("I am greet");
    // }
    // greet();

    //----> Example 1
// debugger
//     console.log("Start");
//     demo();
//     var a1 = 100;
//     console.log(a1);
//     function demo(){
//         let d1 = "Hii";
//         console.log(d1, "I am Demo");
//     }
//     let a2;
//     console.log(a1, a2);
//     console.log("end");

//! 2) ANONYMOUS FUNCTION : function without name


// function (){}


//! 3) FUNCTION EXPRESSION : used to call anonymous function
console.log(displayName); // ud

var displayName = function (){
    console.log("I am Aman Pal");
};

console.log(displayName); // full function with body 

displayName();



//! 4) RETURN TYPE FUNCTION
//! 5)  FUNCTION WITH PARAMETRS
//! 6) REST PARAMETER FUNCTION
//! 7) IIFE
//! 8) HIGHER ORDER AND CALLBACK FUNCTION
//! 9) ARROW FUNCTION
//! 10) CONSTRUCTOR FUNCTION