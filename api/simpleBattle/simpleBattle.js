


/** 
 * Simulate the battle and return the results
 * @author ShadTK
 * @since 25/04/2020
*/

let simulate = function(body){
    return new Promise((resolve, reject) => {
        console.log(JSON.stringify(body));
        resolve("batata")
    });

}

module.exports = {
    simulate: simulate
}