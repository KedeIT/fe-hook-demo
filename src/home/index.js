import React from 'react';

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
        'useState',
        'useEffect',
        'useContext',
        'useReducer',
        'useCallback',
        'useMemo',
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
        <div>
            <p>Hook是React16.8之后推出的新特性，可以让你在不编写class的情况下使用state及其它class特性。</p>
            <p>介绍</p>
            <p>优势</p>
            <List title="趋势" data={trends} />
            <List title="Hook Api" data={hookApis} />
            <List title="使用规则" data={rules} />
        </div>
    );
}

export default Home;