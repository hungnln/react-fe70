import React from "react"
const initialState = {
    component: <p>Default com</p>, handleSubmit: () => {
        alert('Default submit')
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_FORM': {
            state.component = action.component;
            state.handleSubmit = action.handleSubmit;
            return { ...state }
        }
        default:
            return state
    }
}
