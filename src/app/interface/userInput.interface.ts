import { Cordinate } from './cordinate.interface';

export interface UserInput {
    direction: Cordinate;

    // Generates Random user-Input based on random function.
    // Possible outputs [+-1, +-1]
    getRandomInput(): Cordinate;
}