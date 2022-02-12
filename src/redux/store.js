import { createStore } from "redux";
//引入所有合并好的reducer
import combineReducer from "./combineReducer";
//创建仓库
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

const store = createStore(combineReducer)
export default store

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
console.log(store.getState()) //获取仓库数据