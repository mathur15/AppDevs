/*The purpose is to understand the stack, browser API, event queue, and event loop*/
function printOne(){
	console.log("one")
}

function printTwo(){
	console.log("Two")
}
function printThree(){
	console.log("Three")
}

//setTimeout(printOne)
//setTimeout(printTwo,5000)
setTimeout(printThree,0)
setTimeout(printOne)

/*any async functions are sent to the browser api, once completed the 
time, sent into the event queue where the event loop is constantly checking 
if stack is empty and if event queue has items. Items with no async functions,
are executed immediately on the stack*/