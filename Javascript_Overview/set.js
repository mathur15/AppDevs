/*creating classes in js*/
class MySet{
	constructor(arr){
		this.arr=arr
	}
	add(value){
		if(!this.has(value)){
			this.arr.push(value)
		}

	}
	// delete(value){
	// 	this.arr=this.arr.filter(x >= x !== val)

	// }
	has(value){
		return this.arr.includes(value)
	}
	get size(){
		return this.arr.length
	}
}

set1=new MySet([1,2,3,4,5,6])

set1.add(7)
//set1.delete(6)
console.log(set1)
