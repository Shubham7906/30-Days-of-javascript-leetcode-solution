
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   return{
       toBe: function(newV){
           if(newV !== val){
               throw new Error("Not Equal")
           }
           else{
               return true
           }
       },
       notToBe: function(newV){
           if(newV === val) throw new Error("Equal")
           else{
               return true
           }
       }
   }
    
    
};
