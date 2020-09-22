import { Cordinate } from './cordinate.interface';

export interface Fruit {
    centerPos: Cordinate;
    spreadX: number;
    spreadY: number;
    timeTillEnd: number; // In seconds
    size?: number;

    /**
     * Gets called whenever the fruit interface gets called
     * Generates a time between 5 to 15 seconds
     */
    generateTimeTillEnd(): number;
    expandCollapse(offsetX: number, offsetY: number): void;
}
