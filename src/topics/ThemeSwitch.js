import React, {useState, useMemo, useCallback} from 'react';
import cx from 'classnames';

function ThemeSwitch(props) {
    const themes = [{title: '米灰', color: '#f5f5f5'}, {title: '浅粉', color: 'pink'}, {title: '天蓝', color: 'cyan'}]; 
    const [selectedIndex, setSelectedIndex] = useState(0);

    const changeFilter = useCallback((index) => {
        const theme = themes[index];
        props.themeClick(theme.color);
        setSelectedIndex(index);
    }, [props, themes]);


    return (
        <div style={{marginTop: '5px'}}>
            {
                themes.map((item, index) => (
                    <button
                        key={item.title}
                        className={cx(
                            'border button',
                            (index === selectedIndex) && 'selected-border selected-button'
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