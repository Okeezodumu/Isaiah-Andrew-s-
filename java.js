/*console.log("javascript ")
console.log("javascript" + "" + "is cool")
var mystring = "new to javascript"
console.log(mystring)
var firstNum = 500
var secNum = 200

let result1 = firstNum + secNum
let result2 = firstNum - secNum
let result3 = firstNum * secNum
let result4 = firstNum / secNum
let result5 = firstNum % secNum


console.log("firstNum + secNum = " + "" + result1)
console.log("firstNum + secNum = " + "" + result2)
console.log("firstNum + secNum = " + "" + result3)
console.log("firstNum + secNum = " + "" + result4)
console.log("firstNum + secNum = " + "" + result5)

var Addition = result1 
console.log("Addition = " + "" + result1)
var Subtraction = result2
console.log("Subtraction = " + "" + result2)
var Multiplication = result3
console.log("Multiplication = " + "" + result3)
var Division = result4
console.log("Division = " + "" + result4)
var Modulus = result5
console.log("Modulus =" + "" + result5)




let myVar = 5
myVar += 1

console.log(myVar)

let myCar = 5
myCar + 1
console.log(myCar)

let myvae = 5
myvae = + +
console.log(myvae)

my2Var= 6
my2Var --
console.log(my2Var)

myDec = 2.5
myDec = myDec + 5
myDec = myDec *2.2
myDec = myDec % 2
console.log(myDec)
*/

/*var age = 30;
if (age < 18);
 { console.log("Too young") }

var number = "5";
console.log(number == 5);
console.log("5"=== 5)
console.log("<br/ >")

 let a = true
 let b = false
 let result
 result = (b || a)
 console.log(result)
 console.log("<br/ >")

var x = 8
var y = 2
result = x < 10 && y > 1
 console.log(result)
 console.log("<br />")

 let myStr = "string type"
 let myNum = 5
 let myBool = false
 let myObj = {name: "Dave"}
 let myArr = ["one", 2, "Three", 4]
 console.log(typeof myStr)
 console.log(typeof myNum)
 console.log(typeof myBool)
 console.log(typeof myObj)
 console.log(typeof myArr)
 console.log("<br />")

 var mobile =["vivo", "sony", "Lg"]
 console.log(mobile instanceof Array)
 console.log(mobile instanceof Object)
 console.log(mobile instanceof String)
 console.log(mobile instanceof Number)
 console.log(mobile instanceof Boolean)
 console.log(0 in mobile)
 console.log( 1 in mobile)*/

//  var a = 10
//  var b = 20
//  var myValue = (a > b ? 100 :200)
//  console.log(myValue)

//  let grade = "A"
//         console.log("Entering switch statements")
//         switch (grade) {
//             case "A": console.log("Good job")
//                 break;
//             case "B": console.log("Pretty good")
//                 break;
//             case "C": console.log("you passed")
//                 break;
//             case "D": console.log("Not so good")
//                 break;
//             case "E": console.log("Failed")
//                 break;
//             default: console.log("No grade")
//         }
//         console.log("Exiting switch statement") 


    //     let numElem = 0
    //     while (numElem < 20) {
    //         if(numElem===10) {
    //             break
    //         }
        
    // console.log(numElem + "\n")
    // numElem++
    // }

    // let myArr1 = ["a", "b", "c", "d", "e"] // break label
    // let myArr2 = ["t", "c", "g", "h", "i"]
    // toploop: for (const arr1Elem of myArr1) {
    //     bottomloop: for (const arr2Elem of myArr2){
    //         if (arr1Elem == arr2Elem){
    //             break toploop
    //         }
    //         console.log(arr1Elem + " " + arr2Elem)
        
    //     }
    // }
    // toploop: for (const arr1Elem of myArr1) {
    //     console.log(arr1Elem)
    //     bottomloop: for (const arr2Elem  of myArr2) {
    //         if (arr1Elem == arr2Elem){
    //             break bottomloop
    //         }
    //         console.log(arr1Elem + " " + arr2Elem)
    //     }
       
    // }
    let myArr1 = ["a", "b", "c", "d", "e"] // break label
    let myArr2 = ["e", "f", "g", "h", "i"]
    toploop: for (let i = 0; i < myArr1.length; i++) {
            console.log(myArr1[i], "\n")
            bottomloop: for (let j = 0; j < myArr2.length; j++){
                if (i == 2) break bottomloop
                if (i == 4) break toploop
                console.log(myArr2[j], "\n")
            }
        }
        // let myArr1 = ["a", "b", "c", "d", "e"]
        // for (let i =0; i<5; i++){
        //     console.log(myArr1[i], "\n")
        // }
    