import React, {useRef} from 'react';
import './index.css';

function AddTopic(props) {
    const inputRef = useRef(null);

    const addTopic = () => {
        const text = inputRef.current.value;
        props.addClick(text);
        document.getElementById("topicInput").value = "";
    };

    return (
        <div>
            <input
                id="topicInput"
                ref={inputRef} 
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

