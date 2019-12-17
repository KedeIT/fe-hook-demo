import React, {useState, useEffect, useRef} from 'react';
import './index.css';

function AddTopic(props) {
    // const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('AddTopic--mount');
        return () => {
            console.log('AddTopic--unmount');
        };
    });

    // const updateInput = (text) => {
    //     setInput(text);
    // };
    const addTopic = () => {
        // props.addClick(input);
        // setInput('');

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
                // value={input}
                // onChange={e => updateInput(e.target.value)}    
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

