import types from './actionTypes';

export const doneChangeAction = (id) => {
    return {
        type: types.DONE_CHANGE,
        payload: id
    }
}
export const addTodosAction = (inputval) => {
    return {
        type: types.ADD_TODOS,
        payload: inputval
    }
}
export const currentChangeAction = (current) => {
    return {
        type: types.CURRENT_CHANGE,
        payload: current
    }
}