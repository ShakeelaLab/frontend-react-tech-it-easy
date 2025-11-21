import {bestSellingTv} from "./inventory.js";
import {
    BrandTypeName,
    PriceBestSelling, sizeTv
} from "./Deel_1-2.js.jsx";
import check from "../assets/check.png";
import minus from "../assets/minus.png";

const BestSoldTv = () => {
    return (
        <>
            <section>
            <div className="bestsold inner-container">
                <div className="imgbestseller">
                    <img className="bestseller-img" src={bestSellingTv.sourceImg} alt="picture of television"/>
                </div>
                <div className="detailsbestseller">
                    <p><BrandTypeName /></p>
                    <p><PriceBestSelling /></p>
                    <p>{sizeTv()}</p>
                    <div className="specs-container">
                        <ul className="specs">
                            <li><img src={check} alt="check icon"/>wifi</li>
                            <li><img src={minus} alt="check icon"/>speech</li>
                            <li><img src={check} alt="check icon"/>hdr</li>
                            <li><img src={check} alt="check icon"/>bluetooth</li>
                            <li><img src={minus} alt="check icon"/>ambilight</li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
};

export default BestSoldTv;