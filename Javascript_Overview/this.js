/*If a function is invoked as a method of an object, "this" will attach it
to the object from which the method is called*/

const person={
	name:"Som Mathur",
	greet:function(){console.log("Hi: "+this.name)}
}

person.greet()//method called, this is attached to object

//But
const greet1=person.greet
greet1()//since this is attached to the object, it will not refer to name
//undefined