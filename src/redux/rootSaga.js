//在该文件中启动所有模块中的侦听函数
import { all } from "redux-saga/effects";
//引入侦听函数
import watchCount from "./counter/saga";

function* rootSaga() {
    yield all([watchCount()])
    // yield all([watchCount(),...])
}
export default rootSaga