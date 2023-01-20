//  
var studentName  = "Alex";
// Comment 
//Data Types

//  string 
var message = "Hi"

//  Numbers 
var age  = 25;
var bmi = 3.5
// boolean 

var hasCovid = false;
var isHappy = true;

//  Data Structures
//  Arrays
var arr = [1, 2, 5,800]
// Object
var student = {"name": studentName, "age":age }
// console.log(student["age"]);

// Nested Data Structures

var test = [student,{"name": "Sarah", "age":25, "marks":[1, 2, 5,{"math":25}] },
{"name": "Sam", "age":28 },{"name": "Max", "age":45 } ]


console.log(test[1].marks[3].math);

//  Conditionals

if(age< 18){
    console.log("Go Home")
} else {
    console.log("You are Welcome")
}

if(hasCovid){
    console.log("Stay at Home")
}else {
    console.log("You are Welcome")
}

if(studentName === "Alex"){
    console.log("Hi")
} else {
    console.log("Goodbye");
}
if("2" == 2){
    console.log("Hi")
} else {
    console.log("Goodbye");
}
// And && 
if(age> 18 && studentName == "Alex"){
    console.log("You are Welcome")
} else {
  console.log("Go Home")
}
//  Or ||
if(age> 18 || studentName == "Alex"){
    console.log("You are Welcome")
} else {
  console.log("Go Home")
}

//  Loops 

for (var i =0; i<arr.length; i++){
    console.log(arr[i]);
}

// While
var i =0;

while(i < 10){
    console.log(i);
    i++
}

//  Functions 
function sayHi(name){
    console.log(`Hi ${name}`);
}
sayHi("Walid")

function repeat() {
    for(var i = 0; i<10; i++){
        console.log(`i is equal to ${i} and i*2 = ${i*2}`)
    }
}
repeat();