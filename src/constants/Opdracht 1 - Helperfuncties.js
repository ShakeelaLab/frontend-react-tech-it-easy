import {inventory} from "./inventory.js";

// lange versie totalSold
// export function totalSold() {
//     let totalSold = 0;
//     for (let i = 0; i < inventory.length; i++) {
//         totalSold += inventory[i].sold;
//     }
//     return totalSold;
// }

// korte versie totalSold
export const totalSold = inventory.reduce((total, item) => {
    return total + item.sold;}, 0);

// export function totalBoughtTv() {
//     let totalBought = 0;
//     for (let i = 0; i < inventory.length; i++) {
//         totalBought += inventory[i].originalStock;
//     }
//     return totalBought;
// }

// korte versie totalBought
export const totalBought = inventory.reduce((total, item) => {
    return total + item.originalStock;}, 0);

export const totalToSell = () => {
    return totalBought - totalSold;};

