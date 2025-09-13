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

function greetMyName(greet?:String,username:String="guest"):String{
    return `${greet}🙏🏻! , ${username}`
}
console.log(greetMyName("Namaste","Raj"));

// userData?.name // defensive programing

// 4.Array in TypeScript

// 1.basic declaration
let numbers:number[] = [1,2,4,5,6];

// 2.using constructor
let arr = new Array<number>(3);
// size=3
arr[0] =10
arr[1] =10
arr[2] =10

// 3.using Array.of
let arr2 = Array.of(2,3,4);
console.log(arr2);// [2,3,4]

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
type User ={
    name:String;
    age:number; 
    isStudent:boolean;
    greet:(username:string)=>void;
    address?:{city:string,pincode:number}
}
let user:User ={
    name:"suraj",
    age:21,
    isStudent:true,
    greet:(username)=>console.log(`${username}`),

    address:{
        city:"pilkuwa",
        pincode:245304
    }
}
let user2:User ={
    name:"raj",
    age:21,
    isStudent:true,
    greet:(username)=>console.log(`${username}`),

    address:{
        city:"pilkuwa",
        pincode:245304
    }
}

// 7. 

// 8. Enums in TypeScript