import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入容器组件 Provider
import { Provider } from 'react-redux'
// 引入仓库主文件
import store from './redux/store'
// import "antd/dist/antd.css"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
