const firstName="Som";
const lastName="Mathur"

const val= 42

const arr= [4,5,6,function(){
	console.log('hi')
}]

arr[2]()

for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}

const o = new Object();

o.firstName="Som"
o.lastName='Mathur'
o.isLearning=true
o.greet=function(){
	console.log("Hello")
}

//Object literal

const o2={}
o2.firstName="Som"
o2['lastName']="Mathur" 

//deep copy vs shallow copy

/*
Shallow copy- the new object will just store a reference to the original
object

Deep Copy- Copy to new object but instead of reference give it a new position 
in memory. Now changes to one object will not affect the other

*/

//1.shallow copy

const shallow={name:"Som Mathur", grade:"A+"}
const shallow_obj=shallow

shallow_obj.name="Changed name"

//changed for both objects

//2. deep copy---new objects are given new space in memory

function deepCopy(obj){
	const keys=Object.keys(obj)
	const deepCopyObject={}

	for(i=0;i<keys.length;i++){
		if(typeof(keys[i])=== 'Object'){
			deepCopy[key[i]]=deepCopy(obj.keys[i])
		}
		else{
			deeCopyObject[keys[i]]=obj.keys[i]
		}

	return deepCopyObject
	}
}

//arrays are stored by reference as well

//prototypal inheritance--- non primitave types have methods associated with them
//ex. arr.push()
//ex.str.toUpperCase()
//to see the methods associated with a type- ex arr.__proto__
//can be nested as well. arr.__proto__.__proto__-this will show the methods 
//associated with the internal methods. The inner proto takes priority.

//We can wrap the primitive type to invoke methods.---Box the primitive value
//has to be in variable form. cannot do 42.toString()

//If we were to change prototype-

num=42
num.toString()
Number.prototype.toString=function(){
	return "100"
}
num.toString() //expected is a 100

//changing prototype is not recommended.

/*SCOPE- variable lifetime and how long they exist

-----Lexical scoping- usually done with var
-----Block scoping(let, const)- Variable be there till the next end curly brace
----const cannot be updated, let can

*/

//for example:

const obj={}

//we cannot do 
obj={} //as this would be point different place in memory

//we can do this
obj.ca="Canada"//since we are pointing to the same place in memory. Objects are 
//mutable as long as they are pointing to same reference in memory

//Hoisting
/* var and functions are hoisted, they are available for use at the top
functions will actually work but var will give undefined, no error

Does not apply to const and let

variations shown in hoisting.js
*/





