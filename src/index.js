import React from 'react';
import ReactDOM from 'react-dom';// 引入reactDOM 用于渲染js编写的组件
import './index.css';// 引入根样式
import App from './App';// 引入根组件
import * as serviceWorker from './serviceWorker';// 引入本地服务
import 'antd/dist/antd.css';// 引入antd UI组件
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
