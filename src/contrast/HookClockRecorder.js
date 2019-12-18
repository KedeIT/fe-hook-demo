import React, { useState, useEffect } from 'react';

function HookClockRecorder () {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Hook打卡${count}人`;
    })

    const clockIn = () => {
        setCount(count => (count+1));
    }

    return (
        <div>
            <p>打卡人数:{count}</p>
            <button onClick={clockIn}>打卡</button>
        </div>
    );
}

export default HookClockRecorder;
