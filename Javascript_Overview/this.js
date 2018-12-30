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
//undefined, the this will refer to global object

const friend={
	name:"Sumant"
}

friend.greet=person.greet//now this is bound to new object


//1.Setting this explicitly using bind
const greet2=person.greet.bind({name:"This is bound"})
/*instead of global object this is now explicitly bound to name: "This is bound"
*/
greet2()

//2.setting this using call or apply

person.greet.call({name:"This is using apply or call"})