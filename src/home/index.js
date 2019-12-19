import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import InfoMarkdown from '../Info.md';

function Home(props) {
    const [input, setInput] = useState('');

    useEffect(() => {
        async function loadMarkdown () {
            const result = await fetch(InfoMarkdown);
            const text = await result.text();
            setInput(text);
        }
        loadMarkdown();
    }, []);

    return (
        <div style={{paddingLeft: '12px'}}>
            <p>Hook是React16.8的新增特性，可以让你在不编写class的情况下使用state及其它React特性。</p>
            <ReactMarkdown source={input} />
        </div>
    );
}

export default Home;