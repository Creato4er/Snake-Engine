import { Cordinate } from './cordinate.interface';

export interface Controller {
    move(direction: Cordinate): void;
}