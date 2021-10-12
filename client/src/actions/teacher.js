import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const tsignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.tsignIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/tadash");
  } catch (error) {
    console.log(error);
  }
};

export const tsignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.tsignUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/tadash");
  } catch (error) {
    console.log(error);
  }
};
