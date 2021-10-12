import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const ssignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.ssignIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/studentdash");
  } catch (error) {
    console.log(error);
  }
};

export const ssignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.ssignUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/studentdash");
  } catch (error) {
    console.log(error);
  }
};
