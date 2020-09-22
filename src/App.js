import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Demo01></Demo01>

      </header>
    </div>
  );

 
}

class Demo01 extends React.Component{
  render(){
    return (
      <h1>我是demo01</h1>
    )
  }

}
export default App;
