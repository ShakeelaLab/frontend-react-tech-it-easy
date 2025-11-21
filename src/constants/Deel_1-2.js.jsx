import {bestSellingTv} from "./inventory.js";

const {brand, type, name, price} = bestSellingTv;

export const BrandTypeName = () =>  {
    return `${brand} ${type} - ${name}`;
}

export const PriceBestSelling = () => {
    return `€${price},-`
}

export function sizeTv() {
    const bStv = bestSellingTv.availableSizes;
    let sizeTv = [];
    for (let i = 0; i < bStv.length; i++) {
        let sizeCm = (bStv[i] * 2.54).toFixed(0);
        sizeTv.push(`${bStv[i]} inch (${sizeCm}) cm`);
    }
    return sizeTv.join(" | ");
}