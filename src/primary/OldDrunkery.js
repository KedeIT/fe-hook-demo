import React from 'react';
import './index.css';

export default class OldDrunkey extends React.Component {

    state = {
        isOnline: true
    };

    handleChageIsOnline = () => {
        this.setState(state => ({
            isOnline: !state.isOnline 
        }));
    }

    render() {
        const { isOnline } = this.state;
        return (
            <div className="OldDrunkery-container">
                <p>Class Drunkery</p>
                <button onClick={this.handleChageIsOnline}>{isOnline?'营业':'歇业'}</button>
            </div>
        );
    }
}