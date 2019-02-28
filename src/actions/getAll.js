import axios from "axios";
// This will make an API request to get all cats, while telling redux its loading and what response comes back
export function getAllAction() {
  return function(dispatch) {
    dispatch(loading());
    return axios.get("/api/v1/cats/").then(response => {
      if (!response.data) {
        dispatch(errorMessage(response.status));
      } else {
        dispatch(receiveCats(response.data));
      }
    });
  };
}

export function loading() {
  return {
    type: "LOADING",
    isFetching: true
  };
}

export function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  };
}

export const receiveCats = cats => {
  return {
    type: "SUCCESS",
    isFetching: false,
    cats
  };
};
