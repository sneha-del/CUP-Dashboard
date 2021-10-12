import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import student from "./student";
import teacher from "./teacher";

export const reducers = combineReducers({ posts, auth, student, teacher });
