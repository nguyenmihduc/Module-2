// import {Animal} from "../AbstractClass/Animal";
// import {Edible} from "../interFaceClass/Edible";
//
// export class Chicken extends Animal implements Edible{
//     makeSound(): string {
//         return 'chicken: chic chic chic'
//     }
//     howToEat(): string {
//         return "Could be fried"
//     }
// }

import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../interFaceClass/Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "chicken: chic chic chic";
    }
    howToEat(): string {
        return 'can be cook'
    }
}