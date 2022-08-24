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

    // function functionname(parameters){
    //     statements;
    // }
    // functionname(arguments) calling the function;
    
//paramaters are the variables used to define a particular value during the function definiton.parameters are used while declaring a funtion.
// arguments are the actual values passed to the parameter of the function during the function call

//example 
//  function welcome (name) {
//   console.log('hello ' + name);

//  }
//  welcome('keshav');

  // in the above function name is the parameter and keshav is the argument passed to the function paramter
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
// 
 //built in function
 //eval function
//  let x=8;
//  let y = 9;
//  console.log(eval(x+y))
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
//  const fruits = ['apple','mango','papaya']
//  console.log(fruits)
//  fruits.push('mango')
//  console.log(fruits) 
//  console.log(fruits.slice(0,2)); // slice method is used to pick elements of an array
//array methods(push,slice, indexof,length)
// const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// console.log(week);
//  console.log(week.length)

 //objects{} syntax 
 // datatype objectname = { key1: 'value 1' , key2:'value2',  ....} 

//  const person = {
//     name: 'keshav',
//    height: '5.3ft',
//    weight: '50kg',
   
    
//  }
//  // accessing the obejct using dot . notation
//  console.log(person.name)
// accessing the obejts using bracket notation
//  console.log(person['height'])
//   person.phone='12356789' // assing object using dot notation
//  console.log(person) 
//  person['address']='bangalore'
//  console.log(person.address)
  // executing a person info uisng function
//   const details = (name, age, address) =>{  //declarin a functiom
//      const info = {   //creating an object
//           name : name ,
//           age : age ,
//           address : address, 
//           assets: 200000,
//           liabilities : 50000,
//           networth : function () {
//             return this.assets - this.liabilities
//           }  // here creating a method called networth() i.e function can aslo be used as object values.
//           // this keyword refers to an object.

//      } 
//      const mydetails = `hi, my name is ${info.name}, i am  ${age} years old and i stay in ${address}, my netwroth is ${info.networth()}`  // decraing a variable and accesing the object values using template literals

//      return mydetails
//   }
//   console.log(details('keshav','24','bangalore'))

  // above have used arrow funtion wih an object creation to display the personal details.
    

//loops
//  const fruits = ['apple','mango','banana','jackfruits','orange','pine appple']
// //   for (let i=0; i < fruits.length; i++ ) {
// //   console.log(fruits[i])
// //   }
// for ( const     keshav of fruits){
//     console.log(keshav)

// }

// create a funtion to print the given numbers in multiple of 2 in an array.
 
//  const multiple=(numbers)=>{  // function multiple(numbers){}
//     let result=[]
//     for (const number of numbers){
        
//         result.push(number*2)

//     }
//     return result
//   }
//   console.log(multiple([2,4,6,8]))

//   console.log('banana'.length) 
// above have used funtion to diplay the given numbers in multiple of two in an array format.
// a funtion to count the strint value;
//  const countmessage = (message) =>{
   
//     // let result =0
//     // for (  letter in message){
//     //     console.log(Number(letter) +1)
//     //     result= Number(letter)+1
//     // } 
//     return(message.length) // can also be used
    
//  }
//  const message='enter the message'
//  console.log(countmessage(message))
 // funtion to add the elemtns of an array

//  function sumArray(numbers){
//     let result = 0
//     for(num of numbers){
//     result=result+num
//     }
//     return(result)
//  }
//  const numbers=[1,2,3,4,5]
// console.log(sumArray(numbers))
 // find the max number in an array

//  const large = (numbers) => {
//   let result = numbers[0];
//   for (number of numbers){
//     if(number > result){
//       result=number
//     }
//   }
//   return {largest : result}
//  }
//  const numbers=[2,6,3,5,1]
// console.log(large(numbers))
// function for large numbers
//  conditional operator
// let a = 5;
// let b =(a==4)?"true":"false";
// console.log(b);

// ARRAYS
// USED TO STORE LARGE DATA OF SAME TYPE.EXAMPLE STORING  THE DETAILS OF EPLOMYEES IN THE ORGANIZATION
  // var numbers=[3,2,5,6,4]
  // console.log(numbers.reverse()) // array reverse method
  // console.log(numbers.sort())
  // console.log(numbers.push(5));
  // console.log(numbers)
  // console.log(numbers.push(9));
  // console.log(numbers)  
  // console.log(numbers.push(1));
  // console.log(numbers)
  // console.log(numbers)
  // console.log(numbers.shift());// removes the first element in an array
  // console.log(numbers.pop())
  // console.log(numbers)

// map functions
//  const multiplier=(numbers)=>{
//   return numbers.map(number=>number*3)
//    }
//   console.log(multiplier([1,2,3,4,5])) 

// function to compare array elements with am given item

// const compare =(numbers,compareItem)=>{
//   let result=[]
//   for(const number of numbers){
//     if(number>compareItem){
//       result.push(number)
//     }
//   }
//   return result
// }
// console.log(compare([6,2,5,3,2,7],3))
// function to delete the elements of an array
const del=(array)=>{
  for(const arr of array){
    let a = array.pop()
    console.log('the deleted item is '+ a)
    }
    // return array
}
console.log(del([1,2,3,4,5]))