import {inventory} from "./inventory.js";

const totalSold = inventory.reduce((total, item) => {
    return total + item.sold;}, 0);

const totalBought = inventory.reduce((total, item) => {
    return total + item.originalStock;}, 0);

const totalToSell = () => {
    return totalBought - totalSold;};

const SellOverview = () => {
    return (
        <>
            <section>
                <h3>Verkoopoverzicht</h3>
                <div className="inner-container">
                    <div className="div-article">
                        <article className="article">
                            <p>Aantal verkochte producten</p>
                            <p>{totalSold}</p>
                        </article>
                        <article className="article">
                            <p>Aantal ingekochte producten</p>
                            <p>{totalBought}</p></article>
                        <article className="article">
                            <p>Aantal te verkopen producten</p>
                            <p>{totalToSell()}</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
};

export default SellOverview;