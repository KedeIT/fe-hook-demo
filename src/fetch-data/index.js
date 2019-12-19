import React from 'react';
import axios from 'axios';

 //数据源地址 https://hn.algolia.com/api/v1/search?query=redux

function NewsList(props) {

    return (
        <div>
            {(<div>Loading...</div>)}
            <ul>
                {[].map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;