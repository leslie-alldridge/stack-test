import axios from "axios";

// This will make an API request to save cat, while telling redux its loading and what response comes back
export function saveOneAction(name, age, location) {
  const data = {
    name,
    age,
    location
  };
  return function(dispatch) {
    dispatch(loading());
    axios.post(`/api/v1/cats/save`, data).then(response => {
      if (!response.status == 200) {
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

export function receiveCats(cats) {
  return {
    type: "SUCCESS",
    isFetching: false,
    cats
  };
}
