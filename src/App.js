import React from 'react';
import './App.css';

import Header from './header/header';
import Main from './main/main';
import Menu from './menu/menu';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header" style={{zIndex: '2'}}>
          <Header />
        </div>
        <div className="main" style={{zIndex: '1'}}>
          <Main />
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    );
  };
  
}

export default App;
