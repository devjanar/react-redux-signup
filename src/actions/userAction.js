import axios from "axios";

export const ADD_SUCCESS = 'ADD_SUCCESS';
function initRequest() {
    return { type: ADD_SUCCESS }
}
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const onSuccess = (user) => {
    return { type: CREATE_SUCCESS, user }
};
export const FETCH_ERROR = 'FETCH_ERROR';
function onError(error) {
    return { type: FETCH_ERROR, error }
}

export const signUp = (data) => {
    return  (dispatch) => {
        dispatch(initRequest());
        //Api, Connected to Server
        const rs= axios.post('/create',data);
        return Promise.resolve(rs).then(
            success => {
                dispatch(onSuccess(success));
                return success;
            },
            error => {
                dispatch(onError(error));
                throw error;
            }
        )
    }
};
