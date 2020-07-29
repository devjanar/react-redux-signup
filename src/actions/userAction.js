import axios from "axios";

export const ADD_SUCCESS = 'ADD_SUCCESS';
function addRequest() {
    return { type: ADD_SUCCESS }
}
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const createRequest = (data) => {
    return { type: CREATE_SUCCESS, data}
};
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
function receiveError(error) {
    return { type: RECEIVE_ERROR, error }
}

export const signUpHandler = (data) => {
    return  (dispatch) => {
        dispatch(addRequest());
        //Api, Connect to Server
        const rs= axios.post('/create',data);
        return Promise.resolve(rs).then(
            response => {
                dispatch(createRequest({data:response.data}));
                return response;
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};
