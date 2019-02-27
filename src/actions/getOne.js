import request from "superagent";

// This will make an API request to get cat by id, while telling redux its loading and what response comes back
export function getOneAction(id) {
  return function(dispatch) {
    dispatch(loading());
    request.get(`/api/v1/cats/${id}`).then(response => {
      if (response.data[0] == null) {
        //if no cats come back from DB that means none exist with that ID
        dispatch(errorMessage("no cat found"));
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
