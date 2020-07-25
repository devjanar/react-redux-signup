import {
    ADD_SUCCESS,
    CREATE_SUCCESS,
    FETCH_ERROR,
} from '../actions/userAction'

const initialState = {
    inProgress: false,
    user: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUCCESS:
            return { inProgress:true};
        case CREATE_SUCCESS:
            return { user:action.user, inProgress:false};
        case FETCH_ERROR:
            return { inProgress:false, error:true};
        default:
            return state
    }
}
