// function greet(username:string):string{
//     return `Hello ${username}`+1;
// } 
// console.log(greet("Suraj"))


// const add=(a:number, b:number):number=>{
//     return a+b;
// }
// console.log(add(5,3));


// 3. Optional and Default Parameteres
// function greetMyName(greet:String,username:String):String{
//     return `${greet}🙏🏻! , ${username}`
// }

// function greetMyName(greet:String,username:String="Guest"):String{
//     return `${greet}🙏🏻! , ${username}`
// }

// function greetMyName(greet?:String,username:String="guest"):String{
//     return `${greet}🙏🏻! , ${username}`
// }
// console.log(greetMyName("Namaste","Raj"));

// userData?.name // defensive programing

// 4.Array in TypeScript

// 1.basic declaration
// let numbers:number[] = [1,2,4,5,6];

// 2.using constructor
// let arr = new Array<number>(3);
// // size=3
// arr[0] =10
// arr[1] =10
// arr[2] =10

// 3.using Array.of
// let arr2 = Array.of(2,3,4);
// console.log(arr2);// [2,3,4]

// 5.Objects in TypeScript 
// let user:{
//     name:String;
//     age:number; 
//     isStudent:boolean;
//     greet:(username:string)=>void;
//     address?:{city:string,pincode:number}
// } ={
//     name:"suraj",
//     age:21,
//     isStudent:true,
//     greet:(username)=>console.log(`${username}`),
//     // ctrl + spacebar => for suggetions
//     address:{
//         city:"pilkuwa",
//         pincode:245304
//     }
// }

// 6. Type Alias
// type User ={
//     name:String;
//     age:number; 
//     isStudent:boolean;
//     greet:(username:string)=>void;
//     address?:{city:string,pincode:number}
// }
// let user:User ={
//     name:"suraj",
//     age:21,
//     isStudent:true,
//     greet:(username)=>console.log(`${username}`),

//     address:{
//         city:"pilkuwa",
//         pincode:245304
//     }
// }
// let user2:User ={
//     name:"raj",
//     age:21,
//     isStudent:true,
//     greet:(username)=>console.log(`${username}`),

//     address:{
//         city:"pilkuwa",
//         pincode:245304
//     }
// }

// 7. 

// 8. Enums in TypeScript

// ------------------------------------------------
// CLASS 3

// 1. tuples in Ts
// let myDetails:[string,number,boolean] = ['suraj',21,true];

// or use Array
// type CourseType ={
//     id:string;
//     name:string;
//     tags:string[];
// }
// CourseType[]-for array 
// [CourseType]- for tuples 
// let myDetails:CourseType[]=[
//     {
//         id:'1',
//         name:'react',
//         tags:['web','mobile']
//     },
//     {
//         id:'2',
//         name:'react',
//         tags:['web','mobile']
//     }
// ]

// 2. Union 

// let value:string | number |boolean = "surja";
// value=21;
// value=true;

// union in functions
// function printId(id:string | number){
//     if(typeof id === 'string'){
//         console.log("id is a String: ", id.toUpperCase())
//     } else{
//         console.log("id is a number:", id.toFixed(2));
//     }
// }
// printId('0101');
// printId(1234)

// 3. Intersections 

// type Person = {name:string};
// type Worker = {company:string};
// type Human = {gender:string};

// type Employee = Person & Worker & Human;

// const e1: Employee={
//     name: "Suraj",
//     company: "Google",
//     gender: "male"
// }
// export{}


// function logAndReturn(value:string | number | boolean):string |number |boolean{
//     console.log(value);
//     return value;
// }

// logAndReturn(true);
// logAndReturn('raj');

// ! Generics in TypeScript
// function logAndReturn <T, U>(value:T, value2:U){
//     console.log(value);
//     return [value ,value2];
// }

// logAndReturn(true,"suraj")

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));
console.log(identity<string>("hello"));

// --------------------------------------------

// DAY 4

// 1. Interface

interface User{
  name: string;
  age: number;
  isAdmin ?: boolean;
}
const user1:User ={
  name:"Sigma",
  age:21,
  isAdmin:true
}

// using interfaces with function
// interface GreetFunction{
//   (name:string):string;
// }
// const greet:GreetFunction=(name)=>{
//   return `Hello, ${name}`
// }

// interface StringArray{
//   [indexe:number]:string;
// }
// const names:StringArray=["alpha","beta","gamma"];

interface A {
  a: string;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: boolean;
}

const test: C = {
  a: "hello",
  b: 42,
  c: true,
};