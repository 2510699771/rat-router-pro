import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import styleA from './todolist.module.css'
import { doneChangeAction, addTodosAction, currentChangeAction } from '../../redux/todolist/actions.js'
class TodoList extends Component {
  inputRef = createRef()
  addtodos = () => {
    const inputvalue = this.inputRef.current.value
    this.props.dispatch(addTodosAction(inputvalue))
  }
  currentChange = (current) => {
    this.props.dispatch(currentChangeAction(current))
  }
  render() {
    console.log(this.props);
    const { todos, dispatch, buttons, current } = this.props
    return (
      <div>
        <h1>TodoList</h1>
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.addtodos}>新增</button>
        </div>
        <ul>
          {
            todos.map(item => (
              <li className={item.done ? styleA.active : ''} key={item.id} onClick={() => {
                dispatch(doneChangeAction(item.id))
              }}>{item.value}</li>
            ))
          }
        </ul>
        <div>
          {
            buttons.map(item => {
              if (item == current) {
                return <span key={item}>{item}</span>
              }
              return <button key={item} onClick={() => { this.currentChange(item) }}>{item}</button>
            })
          }
        </div>
      </div>
    )
  }
}
const filterTodos = (todos, current) => {
  switch (current) {
    case '已完成': return todos.filter(item => item.done)

    case '未完成': return todos.filter(item => !item.done)

    default: return todos
  }
}
const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todoListReducers.todos, state.todoListReducers.current),
    buttons: state.todoListReducers.buttons,
    current: state.todoListReducers.current,
  }
}
export default connect(mapStateToProps)(TodoList)