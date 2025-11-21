import { inventory } from "./inventory.js";

const Button = () => {
    const mostSold = () => {
        const sorted = [...inventory].sort((a, b) => {
            if (b.sold > a.sold) {
                return 1;
            } else if (b.sold < a.sold) {
                return -1;
            }else {
                return 0;
            }
        });
        console.log(sorted);
    };

    const cheapest = () => {
        const sorted = [...inventory].sort((a, b) => {
            if (a.price > b.price) {
                return 1;
            } else if (a.price < b.price) {
                return -1;
            }else {
                return 0;
            }
        });
        console.log(sorted);
    };

    const mostSuitable = () => {
        const sorted = [...inventory].sort((a, b) => {
            if (b.refreshRate > a.refreshRate) {
                return 1;
            } else if (b.refreshRate < a.refreshRate) {
                return -1;
            }else {
                return 0;
            }
        });
        console.log(sorted);
    };

    const biggestScreenSize = () => {
        const sorted = [...inventory].sort((a, b) => {
            const lastA = a.availableSizes[a.availableSizes.length - 1];
            const lastB = b.availableSizes[b.availableSizes.length - 1];
            return lastB - lastA; // van hoog naar laag
        });
        console.log(sorted);
    };

    return (
        <>
            <section>
                <h3>Alle tv&apos;s</h3>
                <button type="button"
                        onClick={mostSold}>Meest
                    verkocht eerst
                </button>
                <button type="button"
                        onClick={cheapest}>Goedkoopste
                    eerst
                </button>
                <button type="button"
                        onClick={mostSuitable}>Meest
                    geschikt voor sport eerst
                </button>
                <button type="button"
                        onClick={biggestScreenSize}>Grootste schermgroottes eerst
                </button>
            </section>
        </>
    )
};

export default Button;