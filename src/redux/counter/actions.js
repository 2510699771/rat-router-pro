import types from './actionTypes';

export const incrementAction = () => {
    return {
        type: types.INCREMENT
    }
}
export const decrementAction = () => {
    return {
        type: types.DECREMENT
    }
}
export const inputCountAction = (payload) => {
    return {
        type: types.INPUT_COUNT,
        payload: payload
    }

}