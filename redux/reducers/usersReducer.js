import { GET_USER_WITH_AXIOS, GET_USER_WITH_FETCH, REMOVE_USER } from "../constants";

const initialState = {
    users: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_WITH_FETCH:
            return {
                ...state,
                users: [...state.users, action.value]
            };
        case GET_USER_WITH_AXIOS:
            return {
                ...state,
                users: [...state.users, action.value]
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter((elem, index) => index != action.value)
            };
        default:
            return state;
    }
}
export default usersReducer;