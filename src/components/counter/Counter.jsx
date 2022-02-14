import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction, inputCountAction } from '../../redux/counter/actions.js'
class Counter extends Component {
    blur = (e) => {
        this.props.dispatch(inputCountAction(e.target.value))
    }
    render() {
        const { count, dispatch } = this.props;
        return (
            <div>
                <h1>计数器：{count}</h1>
                <input type="text" onBlur={(e) => {
                    dispatch({
                        type: 'inputCountAsync',
                        payload: e.target.value
                    })
                }} />
                {/* <button onClick={() => {
                    // 修改 store 数据：dispatch(action对象)
                    // 1. 调用方法获取到 action 对象
                    const action = incrementAction();
                    // 2. 通过 dispatch 调用 reducer，同时传递 action 对象到 reducer 中
                    dispatch(action);
                }}>+1</button>
                <input type="text" onBlur={this.blur} />
                <button onClick={() => {
                    const action = decrementAction();
                    dispatch(action);
                }}>-1</button> */}
            </div>
        )
    }
}

// 获取到 store 中所有的数据，将需要的数据传递给组件的 props
const mapStateToProps = (state) => {
    // console.log('组件中获取到的数据', state);
    //  return 的值，就会传递给当前组件的 props
    return { count: state.counterReducers.count }
}
export default connect(mapStateToProps)(Counter)