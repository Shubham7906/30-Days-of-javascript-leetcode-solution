/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
   if(nums.length === 0){
       return init;
   }

   var val
   val = fn(init, nums[0])
   for(var i = 0; i < nums.length-1; i++){
       val = fn(val, nums[i+1])
   }
    return val
};
