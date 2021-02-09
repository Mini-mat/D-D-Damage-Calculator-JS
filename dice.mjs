
//importing mersenne twister PRNG and generating the generator
import MersenneTwister from 'mersenne-twister';
var generator = new MersenneTwister();

//exporting dice
//export {d100, d20, d12, d10, d8, d6, d4, d3};
export {dice}


//Getting dice functions
// function d100() {
//     return Math.round(generator.random()*99+1);
// }

// function d20() {
//     return Math.round(generator.random()*19+1);
// }

// function d12() {
//     return Math.round(generator.random()*11+1);
// }

// function d10() {
//     return Math.round(generator.random()*9+1);
// }

// function d8() {
//     return Math.round(generator.random()*7+1);
// }

// function d6() {
//     return Math.round(generator.random()*6+1);
// }

// function d4() {
//     return Math.round(generator.random()*6+1);
// }

// function d3() {
//     return Math.round(generator.random()*2+1);
// }

class dice {
    constructor(size){
        this.size = size;
    }
    get result(){
        return Math.round(generator.random()*(this.size-1)+1)
    }
}