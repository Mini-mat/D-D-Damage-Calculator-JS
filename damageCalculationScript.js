import * as dice from "./dice.js"

//Variables
var returnVar = "";
var advantage = "normal";
var i = 0;
var critical = 20;
var attackBonus = 0;
var damageDice = d6();
var damageBonus = 0;

//Damage Calculation
for (ac = 10; ac <= 32; ac++){
    var avgDamage = 0;
    var avgCalculator = 0;
    while (i <= 2000000){
        switch(advantage){
            case "normal":
                natScore = d20();
                break;
            
            case "advantage":
                natScore = Math.max(d20(), d20());
                break;
            
            case "elven accuracy":
                natScore = Math.max(d20(), d20(), d20());
                break;
            
            case "disavantage":
                natScore = Math.min(d20(), d20());
        }
        attackScore = natScore + attackBonus;
        if (attackScore >= ac){
            avgCalculator += (natScore = 20? damageDice*2 + damageBonus : damageDice + damageBonus);
        }
    }
    avgDamage = Math.round(avgCalculator/2000000)
    returnVar += `Average damage for ac ${ac}: ${avgDamage}`
}