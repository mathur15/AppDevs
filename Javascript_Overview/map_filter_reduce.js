/*using the map function*/
const x =[0,1,2,3]
console.log(x)
function addOne(i){
	return i+1
}

console.log(x.map(addOne))

/*using filter*/
//Depending on the function only the values which evaluate to true are retained
function filter_arr(x){
	return x>1
}
console.log(x.filter(filter_arr))

/*reduce function*/
function add(x,y){
	return x+y
}
console.log(x.reduce(add))//two values at time

