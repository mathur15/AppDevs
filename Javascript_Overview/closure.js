function outer(name,lastName){
	var intro="Your name is "
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

function makeArray(){
	const arr=[]
	for(let i = 0; i < 5; i++){
		arr.push(function(){console.log(i)})
	}
	return arr
}
var list=makeArray()
//console.log(list)
console.log(list[1]())//result is i.

// in the first case we use var, whose value lasts till the end of the 
// function...which in that case would be 5. However let only limits the 
// value only within the for block.


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