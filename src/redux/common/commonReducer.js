import {TOGGLE_MODAL} from "./commonTypes";


const initialState = {
    visible: false,
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_MODAL: return {...state, visible: !state.visible}

        default: return state
    }
}

export default commonReducer;

