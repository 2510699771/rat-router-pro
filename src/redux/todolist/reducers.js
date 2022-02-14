import types from './actionTypes'
const initialState = {
    todos: [
        { id: 1, value: '学习Html', done: false },
        { id: 2, value: '学习Css', done: false },
        { id: 3, value: '学习Js', done: true }
    ],
    newId: 4,
    buttons: ['全部', '已完成', '未完成'],
    current: '全部'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.DONE_CHANGE:
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id == payload) {
                        return { ...item, done: !item.done }
                    }
                    return item
                })
            }
        case types.ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, { id: state.newId, value: payload, done: false }],
                newId: state.newId + 1
            }
        case types.CURRENT_CHANGE:
            return {
                ...state,
                current: payload
            }
        default:
            return state
    }
}
