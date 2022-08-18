/*datatypes in java scripts
numbers=(1,50,2000,25.5)
strings= ('abc' // "abc")
arrays =[]
boolean = true/ false  */
 /*
math operators
add,subtract,multiply,modula, divide , exponents
 */
/*
 math methods
 floor() rounds down the interger to the nearest number.
 ceil() rounds up the integer to the nearest numbers.
 math.random() gives random numbers btwn 0-1 
*/

// varibales ( let ,const,var)
//  let names= 'keshav';
//  console.log( names);

//  sentence= 'this is used to display a sentence'
//  console.log(sentence); // result= displays the sentence content

//   // operators
//   apple=20
//   gst = 1.18
//   total= apple * gst
//   console.log(total) // total=23.599

//   // prompt funtion
//   names = prompt('enter your name'); // prompt  always returns a string value 
//   console.log('the entered name is ',names)
//  // conversion of string to number
//  names = number(prompt('enter the price'));

//  numb=Math.random()*3;
//  console.log(numb);

// condition statements
    // let weather=prompt('rainy');
    
    // if(weather=='rainy'){
    //     console.log('take your umberella');
    // }else{
    //     console.log('wear your sun glasses');
    // }
// functions

    // function functionname(arguments){
    //     statements;
    // }
    // functionname(arguments) calling the function;
    
// function displayname(){
//     console.log('keshav');
//     }
// displayname() calling function without parameters

// function displayname1(name)
// {
//     console.log(name);
// }
// displayname1('ravi') displayname by passing arguments
// function display(name){
//     message= `hi  ${name}, how are you`; //tempalte litereal``
//     console.log(message);
// }
// display('keshav') funtion displayed using template literals. is used te concatinate the user value with the strings.
// function add(a,b){
//     let x= `${a}`
//     let y= `${b}`
//     result=x + y;
//     console.log( result);
// }
// add(2,4)

// function sum(a,b){
//     return a+b;
// }
// num1= sum(1,2)
// console.log(num1)
// funtion to calculate bill
// function calculatebill(food,gst){
//     gst = gst /100;
//     bill = food + gst;
//     return bill;
// }
// console.log(calculatebill(200,18))


//arrow functions minimizes syntax.  its has two methods implicit and explicit
// const calculatebill = (food,gst) =>{
//         gst = gst /100;
//         bill = food + gst;
//         return bill;
//     }
//     console.log(calculatebill(20,18))

// const sum = (a,b) => {
//     return a + b;
// }
// console.log(sum(5,2));

//arrow function implicit return
// const sum = (a,b) => a+b;
// console.log(sum(4,8))

// const div = (a,b) => a/b;
// console.log(div(900000,12));

// arrays 
// const fruits=['apple','mango','grape','banana'];
// console.log(fruits[0])
// array method
// Push()-adds new element to the end of the array and returns the new leght og an array.   
 const fruits = ['apple','mango','papaya']
 console.log(fruits)
 fruits.push('mango')
 console.log(fruits)  
 