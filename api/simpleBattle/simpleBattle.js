/** 
 * Simulate the battle and return the results
 * @author ShadTK
 * @since 25/04/2020
 * @editby Twelve
*/


let simulate = function(body){ //função principal
    return new Promise((resolve, reject) => {
        console.log(JSON.stringify(body));
        const atkRoll = 1;
        const defRoll = 1;
        
        let isAtkOk = checkAtk(body, atkRoll, defRoll);
        let dmg = finalAtk(body, atkRoll, defRoll);
        resolve (isAtkOk
            ? `${body.attacker.name} acertou o ataque! Causando: ${dmg} de dano!`
            : `${body.defenders[0].name} desviou do ataque!`)
    });
}

    let d20 = function(){ //função de rolagem
        return Math.round((Math.random() * (19)) + 1);
    }

    let checkAtk = function(body, atkRoll, defRoll){ //função para verificação de acerto
        let isCheckOK = checkAtkCritFail(body, atkRoll, defRoll);
        return (isCheckOK >= 1);
    }

    let checkAtkCritFail = function(body, atkRoll, defRoll){ // função para confirmação de falha crítica
        let isCritFailOk = critFail(body, atkRoll);
        let atkCheck = (body.attacker.precision + atkRoll)  - (body.defenders[0].ND + defRoll);
        isCritFailOk = isCritFailOk ?  0 : atkCheck;
        return (isCritFailOk);
    }
        let critFail = function(body, atkRoll){ // função para verificar se a rolagem é igual ou menor a taxa de falha crítica
            let checkFail = atkRoll;
            return (checkFail <= body.attacker.critFailureRate);
        }

    let finalAtk = function(body,atkRoll){ //funcão para verificação de dano
        let atk = critDMG(body, atkRoll);
        return atk - body.defenders[0].resistance;
    }

        let critDMG = function(body, atkRoll){ //funcão para verificação de dano crítico
            let damage = body.attacker.damage;
            let isCritOk = checkCrit(body, atkRoll);
            return (isCritOk
                ? damage*2
                : damage)
        }

            let checkCrit = function(body, atkRoll){ //função para verificação de crítico
                let crit = body.attacker.critRate;
                return (atkRoll >= crit);
            }

module.exports = {
    simulate: simulate
}