import types from './actionTypes'
const initialState = {
    count: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.INCREMENT:
            return { count: state.count + 1 };
        case types.DECREMENT:
            return { count: state.count - 1 };
        case types.INPUT_COUNT: return { count: payload };
        default: return state;
    }
}
