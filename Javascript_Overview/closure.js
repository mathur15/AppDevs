function outer(name,lastName){
	let intro="Your name is "
	function inner(){
		console.log(intro+" "+name+" "+lastName)
		console.log("You can access intro")
	}
	inner()
}
outer("Som","Mathur")

function makeArray(){
	const arr=[]
	for(var i = 0; i < 5; i++){
		arr.push(function(){console.log(i)})
	}
	return arr
}
var list=makeArray()
//console.log(list)
console.log(list[0]())//result is 5.
console.log(list[1]())
console.log(list[2]())
console.log(list[3]())

function makeArray(){
	const arr=[]
	for(let i = 0; i < 5; i++){
		arr.push(function(){console.log(i)})
	}
	return arr
}
var list=makeArray()
//console.log(list)
console.log(list[0]())//result is i.
console.log(list[1]())
console.log(list[2]())
console.log(list[3]())


// in the first case we use var, whose value lasts till the end of the 
// function...which in that case would be 5. However let only limits the 
// value only within the for block.

// Var defines the variable globally or locally to an entire function regardless of 
// scope. let defines the variable in block scope. let creates a variable
// declaration for each loop which is block level declaration.



function makeHello(){
	const message="Hello!"
	function sayHello(){
		console.log(message)
	}
	return sayHello
}

const sayHello=makeHello()
sayHello() //when invoked this function still has access to the variable 
// declared above it within makeHello at the point of declaration. This is 
// closure.

/*Using an IIFE keeps the state of the variable even when var is use */
for(var i=1;i<5;i++){
	(function(i){
		setTimeout(function(){
			console.log(
				"Value of i "+i)
		},100)
	})(i)
}