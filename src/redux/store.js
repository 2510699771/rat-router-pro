import { createStore, applyMiddleware } from "redux";
//引入所有合并好的reducer
import combineReducer from "./combineReducer";
// 引入操作日志的中间件
import logger from 'redux-logger';

// 1、引入 redux-saga 模块，获取到 createSagaMiddleware 方法
import createSagaMiddleware from 'redux-saga'

// 4、引入根 saga 文件
import rootSaga from "./rootSaga";



// 2、调用 createSagaMiddleware 方法，得到 saga 对象
const saga = createSagaMiddleware()

//创建仓库
const store = createStore(
    combineReducer,
    // 3、将 saga 中间件加入到 redux 中
    applyMiddleware(
        //logger, 
        saga)
)

// 5、运行 saga
saga.run(rootSaga)
export default store








// const reducer = (state = 0, action) => {
//     console.log(action);
//     switch (action.type) {
//         case "increment": return state + 1;
//         case "decrement": return state - 1;
//         default: return state;
//     }
//     //真正return的数据才是，最终仓库所存的数据
// }
// const store = createStore(reducer)



// const incrementAction = {
//     type: 'increment'
// }
// const decrementAction = {
//     type: 'decrement'
// }
// //action 对象除了 type 属性以外，还可以自己添加任意属性，用来传递额外的参数：
// const inputCountAction = {
//     type: 'inputCount',
//     payload: '10'
// }

// //修改仓库数据
// // 触发修改数据的操作:该方法只负责发号施令，让别人来执行真正的修改操作
// store.dispatch(incrementAction)
// // store.dispatch(decrementAction)
// store.dispatch(inputCountAction)


// // store.getState()
// console.log(store.getState()) //获取仓库数据