import { GET_LOGIN_USER, GET_SIGNUP_USER, RESET, SET_LOGIN_USER, SET_SIGNUP_USER } from "./action_const"

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