import './App.css';
import SellOverview from "./constants/Deel_1-1.jsx";
import {
    SummaryTv
} from "./constants/Deel_2-1.js.jsx";
import BestSoldTv from "./constants/BestSoldTv.jsx";
import Button from "./constants/Button.jsx";


function App() {
    return (
        <>
            <div className="outer-container">
                <h1>Tech it easy dashboard</h1>
                <SellOverview/>
                <h3>Best verkochte tv</h3>
                <BestSoldTv/>
                <Button/>
                <SummaryTv/>
            </div>
        </>
    )
}

export default App
