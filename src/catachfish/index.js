import React from 'react';
import './index.css';

function CatachFish() {
   
    const catachFinsh = () => {
        
    };
    const reset = () => {
       
    };

    return (
        <div className="container">
            <button className="reset" onClick={reset}>Reset</button>
            <button className="fishButton" onClick={catachFinsh}>CatachFish</button>
            <p>抓到0条鱼</p>
            {<p className="catachTip">恭喜抓到一条鱼</p>}
        </div>
    );
}

export default CatachFish;