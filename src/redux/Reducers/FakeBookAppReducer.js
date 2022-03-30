const stateDefault = {
    arrContent: [
        { name: 'Truong', content: 'helo' },
        { name: 'Khai', content: 'helo' },

    ]
}
export const FakeBookAppReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'COMMENT': {
            state.arrContent = [...state.arrContent, action.userComment]
            return { ...state }
        }
        default: return state;
    }
}