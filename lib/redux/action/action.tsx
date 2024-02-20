import {
    GET_ALL_USERS,
    GET_LOGIN_USER,
    GET_SIGNUP_USER,
    GET_USER,
    RESET, SET_ALL_USERS,
    SET_LOGIN_USER,
    SET_SIGNUP_USER,
    SET_USER
} from "./action_const"

// Login & SignUp screen
export const getUserData = (navigation: any, params: any) => ({
    type: GET_LOGIN_USER,
    payload: params,
    navigation
})

export const setUserData = () => ({
    type: SET_LOGIN_USER
})

export const getSignupUser = (navigation: any, params: any) => ({
    type: GET_SIGNUP_USER,
    payload: params,
    navigation
})

export const setSignupUser = () => ({
    type: SET_SIGNUP_USER
})

export const reset = () => ({
    type: RESET
})

// Portfolio Screen
export const getAllUser = () => ({
    type: GET_ALL_USERS
})

export const setAllUser = () => ({
    type: SET_ALL_USERS
})
// profile Screen
export const getUserInfo = () => ({
    type: GET_USER
})

export const setUserInfo = () => ({
    type: SET_USER
})


