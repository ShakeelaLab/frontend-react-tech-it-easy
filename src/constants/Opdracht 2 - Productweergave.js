import {bestSellingTv, inventory} from "./inventory.js";
import {findReturnStatement} from "eslint-plugin-react/lib/util/ast.js";

export function brandTypeName() {
    return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export function priceBestSelling() {
    return `€${bestSellingTv.price},-`
}

export function sizeTv() {
    let sizeTv = [];
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        let sizeCm = bestSellingTv.availableSizes[i] * (2.54).toFixed(0);
        sizeTv.push(`${bestSellingTv.availableSizes[i]} inch (${sizeCm}) cm`);
    }
    return sizeTv.join(" | ");
}
