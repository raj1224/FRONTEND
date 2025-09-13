// function greet(username:string):string{
//     return `Hello ${username}`+1;
// } 
// console.log(greet("Suraj"))
// const add=(a:number, b:number):number=>{
//     return a+b;
// }
// console.log(add(5,3));
// 3. Optional and Default Parameteres
function greetMyName(greet, username) {
    return "".concat(greet, "\uD83D\uDE4F\uD83C\uDFFB! , ").concat(username);
}
console.log(greetMyName("Namaste", "Raj"));
