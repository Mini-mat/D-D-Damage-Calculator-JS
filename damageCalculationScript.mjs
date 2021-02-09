import {dice} from "./dice.mjs";

//Dice variables
const d20 = new dice(20);
var d12 = new dice(12);
var d10 = new dice(10);
var d8 = new dice(8);
var d6 = new dice(6);
var d4 = new dice(4);

//Variables
var returnVar = "";
var advantage = "normal";
var critical = 19;
var attackBonus = 9;
var damageDice = d6;
var damageDiceQuantity = 3;
var damageBonus = 6;




//Damage Calculation
for (var ac = 10; ac <= 32; ac++){
    var avgDamage = 0;
    var avgCalculator = 0;
    var i=0;
    while (i <= 2000000){
        switch(advantage){
            case "normal":
                var natScore = d20.result;
                break;
            
            case "advantage":
                var natScore = Math.max(d20.result, d20.result);
                break;
            
            case "elven accuracy":
                var natScore = Math.max(d20.result, d20.result, d20.result);
                break;
            
            case "disavantage":
                var natScore = Math.min(d20.result, d20.result);
                break;
        }
        var attackScore = natScore + attackBonus;
        if (attackScore >= ac && natScore != 1){
            avgCalculator += (natScore = critical? damageDice.result + damageDice.result + damageBonus : damageDice.result + damageBonus);
        }
        i++;
    }
    avgDamage = Math.round(avgCalculator/2000000);
    returnVar += `Average damage for ac ${ac}: ${avgDamage} \n`;
}

console.log(returnVar);