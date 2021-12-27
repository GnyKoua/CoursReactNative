import { GET_USER_WITH_AXIOS, GET_USER_WITH_FETCH, REMOVE_USER } from "../constants"

export function addUserFetch(user) {
    return {
        type: GET_USER_WITH_FETCH,
        value: user
    }
}

export function addUserAxios(user) {
    return {
        type: GET_USER_WITH_AXIOS,
        value: user
    }
}

export function removeUser(userIndex) {
    return {
        type: REMOVE_USER,
        value: userIndex
    }
}