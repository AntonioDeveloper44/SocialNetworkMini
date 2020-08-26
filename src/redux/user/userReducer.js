import {PUT_AVATAR} from './userTypes'

const initialState = {
    avatar: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case PUT_AVATAR:
            return {...state, avatar: action.data }

        default:  return state
    }
}

export default userReducer;