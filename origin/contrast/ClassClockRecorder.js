import React from 'react';

export default class ClassClockRecorder extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        document.title = "Class打卡0人";
    }

    clockIn = () => {
        this.setState(state => ({
            count: (state.count + 1)
        }), () => {
            document.title = `class打卡${this.state.count}人`;
        });
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