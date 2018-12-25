//Hoisitng is when values are available at the top of the document

//console.log(thisIsavar)//undefined
//console.log(thisIsLet)//ReferenceError--the variable is not defined
//iprint() //we get the output as expected

//thisIsAFunc()//TypeError--as it is not declared as a function yet

//thisIsAletfunc()//ReferenceError- this let not defined at all now


//Suppose we declare a var
var thisIsavar= 32

//Suppose we try let or const

let thisIsLet= 42

//function hoisting

function iprint(){
	console.log("This was declared at the bottom")
}

//function hoisiting with var

var thisIsAFunc=function(){
	console.log("This var function will not be printed")
}

//function hoisting with let, same for const

let thisIsAletfunc=function(){
	console.log("This will not be printed either lol")
}