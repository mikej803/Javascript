

// // // function expression
// // // anonymous function
// // var area = function(height, width){
    
// //     return height * width;
// // }
// // console.log(area(4, 5));



// // console.log(area(4, 5));
// // // function declaration
// // function area(height, width){

// //     return height * width;
// // }


// // arrow function
// var area(height, width)=>{
    
//     return height * width;
// }

// var area(height, width)=>return height * width;


// function lvl4exercise1 () {
//     // Return the boolean value "true"
//   }
//   function lvl4exercise2 () {
//     // Return the boolean value "false"
//   }
//   function lvl4exercise3 (bool) {
//     // Return the opposite of the input boolean value
//   }
//   function lvl4exercise4 (bool1, bool2) {
//     // Return the logical "and" of the input boolean values
//   }
//   function lvl4exercise5 (bool1, bool2) {
//     // Return the logical "or" of the input boolean values
//   }
//   function lvl4exercise6 (bool1, bool2) {
//     // Return the logical "equivalence" of the input boolean values
//   }

// self-invoking functions

// (function(){
//     console.log("I was immediately invoked");
// })();

// (()=>{
//     console.log("I was immediately invoked");
// })();

// // design pattern
// (function(num1, num2){
//     console.log(num1 + num2);
// })(3, 4);






// let arrA = [4, 8, 3, 4, 67]; //pass by reference

// let arrB = arrA; //same memory address
// letarrB = [...arrA];

// arrB[0] = 99;

// console.log(arrA);
// console.log(arrB);



// var a = 6; //global

// function testFunction(){
//     var hello = "Hello World"
// }
// console.log(testFunction())

// var testFunction = ()=>{
//     var hello = "Hello World"
//     console.loglog(a);
// }
// console.log(testFunction())

// // var let, cont

// cost pi = 3.14;

// pi = 3;

// const mhObj = {
//     key1: "value"
// }

// myObj.key1 == "value2"

// myObj = []
// console.log(myObj);

var count = 0;

for(count = 0; count < 10; count++){
    console.log(count);
}

var num = count * 4;


