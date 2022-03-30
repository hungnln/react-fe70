const initialState = {
    arrTask: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_TASK': {
            state.arrTask = [...action.arrTask];
            return { ...state }
        }
        default:
            return state;
    }
}
