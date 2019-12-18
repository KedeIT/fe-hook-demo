import React, {useReducer, useState} from 'react';
import AddTopic from './AddTopic';
import TopicList from './TopicList';
import ThemeSwitch from './ThemeSwitch';
import {ThemeContext} from './Context';

const initialState = {data: []};

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            {
                const tmpData = state.data;
                const topic = action.payload;
                tmpData.push(topic);
                return {data: tmpData}
            }
        case 'delete': 
            {
                const tmpData = state.data;
                const index = action.payload;
                tmpData.splice(index, 1);
                return {data: tmpData};
            }
        case 'resetHot':
            {
                const index = action.payload;
                const topic = state.data[index];
                topic.isHot = !topic.isHot;
                return {data: state.data};
            }
        default:
            return state;
    }
}

function TopicPage(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [themeColor, setThemeColor] = useState('#f5f5f5');

    const handleAddClick = text => {
        dispatch({
            type: 'add',
            payload: {
                text: text,
                isHot: false
            }
        });
    }
    const handleDeleteClick = index => {
        dispatch({
            type: 'delete',
            payload: index
        });
    }
    const handleResetHotClick = index => {
        dispatch({
            type: 'resetHot',
            payload: index
        });
    }
    const handleThemeClick = color => {
        setThemeColor(color);
    }

    return (
        <div className="container">
            <ThemeSwitch themeClick={handleThemeClick} />
            <AddTopic addClick={handleAddClick} />
            <ThemeContext.Provider value={themeColor}>
                <TopicList 
                    data={state.data} 
                    deleteClick={handleDeleteClick}
                    resetHotClick={handleResetHotClick} 
                />
            </ThemeContext.Provider>
        </div>
    );
}

export default TopicPage;