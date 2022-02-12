import React, { Component } from 'react';
import HomeTop from '../../components/homeTop/HomeTop'
import { Switch, Route, NavLink } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import TodoList from '../../components/todoList/TodoList';
export default class Home extends Component {
  render() {
    return <div>
      Home
      <HomeTop></HomeTop>
      <ul>
        {/* 改变浏览器 URL 的地址 */}
        <li><NavLink activeClassName='active' to="/home/counter">计数器</NavLink></li>
        <li><NavLink activeClassName='active' to="/home/todoList">TodoList</NavLink></li>
      </ul>
      <div>
        <Switch>
          {/* 和浏览器的 URL 地址进行匹配 */}
          <Route path="/home/counter" component={Counter}></Route>
          <Route path="/home/todoList" component={TodoList}></Route>
        </Switch>
      </div>
    </div>;
  }
}
