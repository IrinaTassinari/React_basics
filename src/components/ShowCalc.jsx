import { multiply,divide } from "../utils/UsefulFunction";
function ShowCalc(){
    const a = 10;
    const b = 5;

    return (
        <div>
            <h2>Results</h2>
            <p>a*b = {multiply(a,b)}</p>
            <p>a/b = {divide(a,b)}</p>
            {/* в html стр-ре вызываем JS {} */}
        </div>
    );
};

export default ShowCalc