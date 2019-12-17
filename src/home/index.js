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
    ];
    const hookApis = [
        'useState',
        'useEffect',
        'useContext',
        'useCallback',
        'useMemo',
        'useReducer',
        'useRef',
        'useImperativeHandle',
        'useLayoutEffect',
        'useDebugValue'
    ];
    const repos = [
        'react-router-dom',
        'react-redux',
        'mobx-react'
    ];

    return (
        <div>
            <List title="Hook介绍" data={infos}/>
            <List title="Hook Api" data={hookApis} />
            <List title="支持Hook的第三方库" data={repos} />
        </div>
    );
}

export default Home;