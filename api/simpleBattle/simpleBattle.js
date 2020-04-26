/** 
 * Simulate the battle and return the results
 * @author ShadTK
 * @since 25/04/2020
 * @editby Twelve
*/

let d20 = function(){ //função de rolagem
    return Math.round((Math.random() * (19)) + 1);
}

let checkAtk = function(body){
    let check = (body.attacker.precision + d20()) - (body.defenders[0].ND + d20());
    return (check >= 0);
}

let simulate = function(body){
    return new Promise((resolve, reject) => {
        console.log(JSON.stringify(body));
        let isAtkOk = checkAtk(body);
        let dmg = body.attacker.damage - body.defenders[0].resistance;
        resolve (isAtkOk
            ? `${body.attacker.name} acertou o ataque! Causando: ${dmg} de dano!`
            : `${body.defenders[0].name} desviou do ataque!`)
    });
}




module.exports = {
    simulate: simulate
}