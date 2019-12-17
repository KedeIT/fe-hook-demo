import React, {useMemo, useContext} from 'react';
import {ThemeContext} from './Context';

function Topic(props) {

    const backgroundColor = useContext(ThemeContext);

    const HotLabel = useMemo(() => {
        if (props.isHot) {
            return <span className="hot-label">[热门]</span>;
        }
        return null;
    }, [props.isHot]);

    return (
        <div className="topic-container" style={{backgroundColor: backgroundColor}}>
            {HotLabel}
            <span className="normal-text">{props.text}</span>
            <button onClick={props.resetHotClick.bind(this, props.index)}>{props.isHot ? '取消Hot' : '设为Hot'}</button>
            <button onClick={props.deleteClick.bind(this, props.index)}>删除</button>
        </div>
    );
}

export default Topic;