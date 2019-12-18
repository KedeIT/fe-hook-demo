import React, { useState } from 'react';

function HookClockRecorder () {
    
    const [count, setCount] = useState(0);

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
