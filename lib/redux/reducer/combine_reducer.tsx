import { combineReducers } from "redux";
import Authreducer from "./auth/auth_reducer";
import getAllUsers from "./user/get_all_users";
import getUser from "./user/get_user";
import addNewBlog from "./blog/create_blog";
import updateUserDoc from "./user/edit_user";
import getBlogs from "./blog/get_blogs";
import addNewProject from "./project/create_project";
import getProjects from "./project/get_projects";
import deleteProject from "./project/delete_pro";
import updateProject from "./project/update_project";
import contactUser from "./user/sent_mail";


const allReducers = combineReducers({
    Auth: Authreducer,
    Users: getAllUsers,
    User: getUser,
    createBlog: addNewBlog,
    updateUserEntity: updateUserDoc,
    blogList: getBlogs,
    newProject: addNewProject,
    projectList: getProjects,
    deleteProject: deleteProject,
    updateProject: updateProject,
    contactUser: contactUser,
});
export default allReducers;