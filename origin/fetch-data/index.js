import React, { useState, useEffect } from 'react';
import axios from 'axios';

 //数据源地址 https://hn.algolia.com/api/v1/search?query=redux
let cancel;

function NewsList(props) {
    const [data, setData] = useState({ hits: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('NewsList --- useEffect');
        
        async function fetchData() {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
                {
                    cancelToken: new axios.CancelToken(function executor(c) {
                        cancel = c;
                    })
                }
            ).catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('请求取消了');
                } else {
                    console.log('请求错误了');
                }
            }); 
            if (result === undefined || result === null) {
                return;
            }
            setData(result.data);
            setLoading(false);
        }
        
        fetchData();
        return () => {
            cancel('发生异常取消请求');
            console.log('NewsList --- useEffect --- ummount');
        };
    }, []);

    return (
        <div>
            {loading && (<div>Loading...</div>)}
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;