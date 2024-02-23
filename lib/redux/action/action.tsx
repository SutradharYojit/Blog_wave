import {
    CONTACT_BLOGGER,
    CREATE_BLOG,
    CREATE_PROJECT,
    DELETE_BLOG,
    DELETE_PROJECTS,
    GET_ALL_USERS,
    GET_BLOG,
    GET_LOGIN_USER,
    GET_PROJECTS,
    GET_SIGNUP_USER,
    GET_USER,
    RESET,
    SET_ALL_USERS,
    SET_BLOG,
    SET_BLOG_ITEM,
    SET_LOGIN_USER,
    SET_PROJECT_ITEM,
    SET_SIGNUP_USER,
    SET_USER,
    SET_USER_DATA,
    UPDATE_BLOG,
    UPDATE_PROJECT,
    UPDATE_USER,
    UPDATE_USERPROFILE
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

// Create Blog Screen
export const addBlog = (params: any) => ({
    type: CREATE_BLOG,
    payload: params,
})

export const setBlogItem = () => ({
    type: SET_BLOG_ITEM
})

// Update user Profile
export const updateUser = (params: any) => ({
    type: UPDATE_USER,
    payload: params,
})

export const setUser = () => ({
    type: SET_USER_DATA
})

export const updateUserProfile = (params: any) => ({
    type: UPDATE_USERPROFILE,
    payload: params,
})

// Blog Listing Screen
export const fetchBlogInfo = () => ({
    type: GET_BLOG,
})

export const setBlog = () => ({
    type: SET_BLOG
})
//Add & Update project Screen
export const addProject = (params: any) => ({
    type: CREATE_PROJECT,
    payload: params,
})

export const updateProject = (params: any) => ({
    type: UPDATE_PROJECT,
    payload: params,
})

// Projects Screen & blogger profile Screen
export const featchProjectInfo = (params: any) => ({
    type: GET_PROJECTS,
    payload: params,

})

// project details screen
export const deleteProject = (params: any) => ({
    type: DELETE_PROJECTS,
    payload: params,
})

//Blog details screen
export const updateBlog = (params: any) => ({
    type: UPDATE_BLOG,
    payload: params,
})

export const deleteBLog = (params: any) => ({
    type: DELETE_BLOG,
    payload: params,
})

// Blogger Contact screen
export const contactBlogger = (params: any) => ({
    type: CONTACT_BLOGGER,
    payload: params,
})
