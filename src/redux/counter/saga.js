import { takeEvery, call, put } from 'redux-saga/effects'

function* inputCount(action) { // { type: 'inputCountAsync', payload: 10 }
    console.log(action);
    // 调用异步方法，发送异步请求，接收异步请求的结果
    const res = yield call(setCountAsync, action.payload);
    // 将异步获取到的结果更新的仓库中去
    yield put({ type: 'inputCount', payload: res });
}


// 模拟请求（异步） 这个代码以后是写在 api 中的
function setCountAsync(payload) {
    return new Promise((resolve) => {
        setTimeout(() => {
            //  获取到用户在页面中输入的值，返回一个乘以 2 的新值
            const newCount = payload * 2;
            resolve(newCount)
        }, 1000);
    })
}
//创建一个侦听函数
function* watchCount() {
    // 第一个参数：侦听的 action 的 type 值
    yield takeEvery('inputCountAsync', inputCount)
}



//最后，将侦听函数暴露出去：

export default watchCount;