import React, {useState, useEffect} from 'react';
import './index.css';

function CatachFish() {
    const [count, setCount] = useState(0);
    const [isShowTip, setShowTip] = useState(false);

    useEffect(() => {
        console.log('title-effect');
        
        document.title = `抓到${count}条鱼`;
    }, [count]);
    useEffect(() => {
        console.log('enter catachfish showtip effect');
        
        if (!isShowTip) {
            return;
        }

        console.log('excute catachfish showtip effect');

        const timeId = setTimeout(() => {
           setShowTip(false); 
        }, 2000);
        return (() => {
            clearTimeout(timeId);
        });
    }, [isShowTip]);
    useEffect(() => {
        console.log('CatchFish --- mount');
        return () => {
            console.log('CatchFish---unmount');   
        };
    }, []);

    const catachFinsh = () => {
        setCount(count => count + 1);
        setShowTip(true);
    };
    const reset = () => {
        setCount(0);
        setShowTip(false);
    };

    return (
        <div className="container">
            <button className="reset" onClick={reset}>Reset</button>
            <button className="fishButton" onClick={catachFinsh}>CatachFish</button>
            <p>抓到{count}条鱼</p>
            {isShowTip && <p className="catachTip">恭喜抓到一条鱼</p>}
        </div>
    );
}

export default CatachFish;