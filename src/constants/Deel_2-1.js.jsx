import '../App.css';
import {inventory} from "./inventory.js";
import check from "../assets/check.png";
import minus from "../assets/minus.png";
import soldoutImage from '../assets/out-of-stock.png';

export const SummaryTv = () => {
    return (
        <>
            {inventory.map((tv, index) => (
                <div key={index}
                     className="bestsold inner-container summarytv">
                    <div className="imgbestseller">
                        <img
                            className="bestseller-img"
                            src={tv.sourceImg}
                            alt={`picture of ${tv.brand} television`}
                        />
                        {tv.sold === tv.originalStock && (
                            <img className="sold-out-image"
                                 src={soldoutImage}
                                 alt="image of sold out"/>
                        )}
                    </div>

                    <div className="detailsbestseller">
                        <p>{tv.brand}</p>
                        <p>€{tv.price}</p>
                        <p>
                            {tv.availableSizes
                                .map((size) => `${size} inch (${(size * 2.54).toFixed(0)} cm) `)
                                .join(" | ")}
                        </p>
                        <ul className="specs">
                            {tv.options.map((option) => {
                                return (
                                    <li key={option.name}>
                                        <img
                                            src={option.applicable === true ? check : minus}
                                            alt="icon"/>
                                        {option.name === "ambiLight" ? "ambilight" : option.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};
