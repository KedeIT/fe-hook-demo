import React, { useState } from 'react';

function HookDrunkery() {
    const [isOnline, setIsOnline] = useState(true);
    
    const handleChangeIsOnline = () => {
        setIsOnline(isOnline => {
            return !isOnline;
        });
    }

    return (
        <div className="HookldDrunkery1-container">
            <p>Hook HookDrunkery1</p>
            <button onClick={handleChangeIsOnline}>{isOnline?'营业':'歇业'}</button>
        </div>
    );
}

export default HookDrunkery;