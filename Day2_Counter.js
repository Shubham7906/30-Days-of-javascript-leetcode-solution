* @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        let num = n
        n+=1;
        return num
        
    };
};
