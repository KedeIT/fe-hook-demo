import React from 'react';
import Topic from './Topic';

function TopicList(props) {
    return (
        <div className="topic-list">
            {
                props.data.map((item, index) => (
                    <Topic 
                        key={index}
                        index={index} 
                        text={item.text} 
                        isHot={item.isHot} 
                        deleteClick={props.deleteClick}
                        resetHotClick={props.resetHotClick}
                    />
                ))
            }
        </div>
    );
}

export default TopicList;