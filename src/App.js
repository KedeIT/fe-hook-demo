import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './home';
import HookPrimaryExample from './primary';
import CatachFish from './catachfish';
import TopicPage from './topics';
import NewsList from './fetch-data';

function App() {
  const buttons = [
    '介绍',
    '基础使用',
    '请求数据',
    '标签列表'
  ];
  const routes = [
    '/',
    '/catachfish',
    '/newsList',
    '/topics'
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  
  useEffect(() => {
    document.title = buttons[selectedIndex];
  }, [buttons, selectedIndex]);
  
  const clickNavButton = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
      <div>
        <nav className="app-header">
          {
            buttons.map((item, index) => (
              <Link 
                key={`${item}${index}`} 
                className={cx([
                  'nav-button',
                  (index === selectedIndex) && 'selected-nav-button'
                ])}
                onClick={clickNavButton.bind(this,index)}
                to={routes[index]}
              >
                  {item}
              </Link>
            ))
          }
        </nav>  

        <Switch>
          <Route path="/primary">
            <HookPrimaryExample />
          </Route>
          <Route path="/newslist">
            <NewsList />
          </Route>
          <Route path="/catachfish">
            <CatachFish />
          </Route>
          <Route path="/topics">
            <TopicPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
