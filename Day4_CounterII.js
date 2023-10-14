/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let num = init
    return{
    increment : function(val){
        num = num + 1
        return num
    },
    reset : function(val){
        num = init
        return num
    },
    decrement : function(val){
        num = num - 1
        return num
    }
    }
    
};
