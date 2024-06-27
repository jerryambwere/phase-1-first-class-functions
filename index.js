function receivesAFunction(spy) {
    console.log('hello')
    spy()
}
receivesAFunction(spy)
 
 
function returnsANamedFunction() {
    return receivesAFunction
}
 returnsANamedFunction()

 function returnsAnAnonymousFunction() {
    return function(){}
 }
 returnsAnAnonymousFunction()