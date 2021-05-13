import { types } from './actionTypes';
const initialState = {
    userdata: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_SUCCESS:
            {
                return {
                    ...state,
                    userData: action.userInfo,
                };
            }
        default: return state;
    }
};
export default reducer;