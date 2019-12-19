import React, {useState, useCallback} from 'react';
import cx from 'classnames';

function ThemeSwitch(props) {
    const themes = [{title: '米灰', color: '#f5f5f5'}, {title: '浅粉', color: 'pink'}, {title: '天蓝', color: 'cyan'}]; 

    const changeFilter = (index) => {
        
    };

    return (
        <div style={{marginTop: '5px'}}>
            {
                themes.map((item, index) => (
                    <button
                        key={item.title}
                        className={cx(
                            'border button'
                        )}
                        onClick={changeFilter.bind(this, index)}
                    >
                        {item.title}
                    </button>
                ))
            }
        </div>
    );
}

export default ThemeSwitch;