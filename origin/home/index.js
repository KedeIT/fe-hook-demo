import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import InfoMarkdown from '../Info.md';
function List(props) {
    const { title, data } = props;
    return (
        <div key={title}>
            <p>{title}</p>
            <ul>
                {
                    data.map((item, index) => (
                        <li key={`${title}${index}`}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

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

    const infos = [
        '简介',
        '优势',
        '趋势'
    ];
    const advntages = [
        "Hook使你在无需修改组件结构的情况下复用状态逻辑",
        "Hook可以将组件更加细化，让组件变得更加容易理解",
        "Hook在非class的情况下也可以使用React特性"
    ];

    const trends = [
        "Hook是React目前跟未来力推的特性",
        "现在很多常用的第三方库已支持Hook，比如react-router-dom、react-redux、mobx-react。"
    ];
    const hookApis = [
        'useReducer -- useState的替代品，适用于复杂的state',
        'useCallback -- 返回一个memorized函数',
        'useMemo -- 返回一个memorized值',
        'useRef -- 返回一个可变ref对象',
        'useImperativeHandle -- 可以让你在使用 ref 时自定义暴露给父组件的实例值',
        'useLayoutEffect -- 和useEffect作用相同，但是是在DOM变更后同步触发重渲染',
        'useDebugValue -- 用于在React开发工具中显示自定义的标签'
    ];
    const rules = [
        "只能在最顶层使用Hook，不要在循环语句、条件语句或嵌套函数中调用Hook",
        "只在React函数中调用，不能在类组件中或普通的js函数中调用",
        "以use为前缀非系统hook api的函数就称为自定义Hook"
    ];

    return (
        <div style={{paddingLeft: '12px'}}>
            <p>Hook是React16.8的新增特性，可以让你在不编写class的情况下使用state及其它React特性。</p>
            <p>优势</p>
            <p>1.Hook使你在无需修改组件结构的情况下复用状态逻辑</p>
            <p>2.Hook让组件变得更加容易理解</p>
            <p></p>
            <p></p>
            <List title="趋势" data={trends} />
            <p>常用API</p>
            <p>useState</p>
            <p>useEffect</p>
            <p>useContext</p>
            <List title="不常用API" data={hookApis} />
            <List title="使用规则" data={rules} />
            <ReactMarkdown source={input} />
        </div>
    );
}

export default Home;