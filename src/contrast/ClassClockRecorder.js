import React from 'react';

export default class ClassClockRecorder extends React.Component {
    state = {
        count: 0
    };

    clockIn = () => {
        this.setState(state => ({
            count: (state.count + 1)
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>打卡人数：{count}</p>
                <button onClick={this.clockIn}>打卡</button>
            </div>
        );
    }
}