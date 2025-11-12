  import './App.css';
  import {totalBought, totalToSell, totalSold} from "./constants/Opdracht 1 - Helperfuncties.js";
  import {brandTypeName, priceBestSelling, sizeTv} from "./constants/Opdracht 2 - Productweergave.js";
  import {bestSellingTv} from "./constants/inventory.js";

  function App() {
    return (
        <>
      <h1>Tech it easy dashboard</h1>
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
          <h3>Best verkochte tv</h3>
            <div className="bestsold">
              <div className="imgbestseller">
                <img className="bestseller-img" src={bestSellingTv.sourceImg} alt="picture of television" />
              </div>
              <div className="detailsbestseller">
              <p>{brandTypeName()}</p>
              <p>{priceBestSelling()}</p>
              <p>{sizeTv()}</p>
              </div>
            </div>
          </div>
          </>
    )
  }

  export default App
