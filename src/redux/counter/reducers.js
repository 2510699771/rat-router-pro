import types from './actionTypes'
const initialState = {
    count: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.INCREMENT: return state + 1;
        case types.DECREMENT: return state - 1;
        case types.INPUT_COUNT: return payload;
        default: return state;
    }
}
