/** 
 * Simulate the battle and return the results
 * @author ShadTK
 * @since 25/04/2020
 * @editby Twelve
*/

let d20 = function(){ //função de rolagem
    return Math.round((Math.random() * (19)) + 1);
}

let checkAtk = function(body){ //função para verificação de acerto
    let check = (body.attacker.precision + atkRoll)  - (body.defenders[0].ND + defRoll) ;
    return (check >= 0);
}

let checkCrit = function(body){ //função para verificação de crítico
    let crit = body.attacker.critRate;
    return (crit >= atkRoll);
}

let critDMG = function(body){
    let doubleDMG = body.attacker.damage;
    let isCritOk = checkCrit(body);
    return (isCritOk
        ? doubleDMG*2
        : doubleDMG)
}

let finalAtk = function(body){
    let atk = critDMG(body);
    return atk - body.defenders[0].resistance;
}

let simulate = function(body){
    return new Promise((resolve, reject) => {
        console.log(JSON.stringify(body));
        let isAtkOk = checkAtk(body);
        let dmg = finalAtk(body);
        let atkRoll = d20();
        let defRoll = d20();
        resolve (isAtkOk
            ? `${body.attacker.name} acertou o ataque! Causando: ${dmg} de dano!`
            : `${body.defenders[0].name} desviou do ataque!`)
    });
}




module.exports = {
    simulate: simulate
}