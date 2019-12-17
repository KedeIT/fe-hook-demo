import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsList(props) {
    const [data, setData] = useState({ hits: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('NewsList --- useEffect');
        
        async function fetchData() {
            const result = await axios(
                'http://hn.algolia.com/api/v1/search?query=redux',
            ); 

            setData(result.data);
            setLoading(false);
            console.log('NewsList --- fetchData'); 
        }
        
        fetchData();
        return () => {console.log('NewsList --- useEffect --- ummount');};
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