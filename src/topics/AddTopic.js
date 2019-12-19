import React from 'react';
import './index.css';

function AddTopic(props) {
    const addTopic = () => {
       
    };

    return (
        <div>
            <input
                id="topicInput"
                type="text" 
                name="topic" 
                className="border topicInput" 
                placeholder="请输入..."
            />
            <button 
                className="border button"
                onClick={addTopic}
            >
                添加
            </button>
        </div>
    );
}

export default AddTopic;

