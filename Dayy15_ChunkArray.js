
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunked = []
    for(let i = 0; i < arr.length; i+=size){
        const ch = arr.slice(i, i+size)
        chunked.push(ch)
    }
    return chunked
};
