import React from 'react';
import HookClockRecorder from './HookClockRecorder';
import ClassClockRecorder from './ClassClockRecorder';

function ContrastScreen () {
    return (
        <div>
            <p>Hook实现</p>
            <HookClockRecorder />
            <p>Class实现</p>
            <ClassClockRecorder />
        </div>
    );
}

export default ContrastScreen;