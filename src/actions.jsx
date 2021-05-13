import { types } from './actionTypes';

export const userDetails = (userInfo) => {
    return {
        type: types.USER_SUCCESS,
        userInfo: userInfo
    }
}
export default userDetails;