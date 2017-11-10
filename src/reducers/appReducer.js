import {
    SET_RESULTS
} from "../actions/appActions"

export const initialState = {
  query: "",
  results: [],
  saved: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_RESULTS:
      return {
        ...state,
        results: payload.results
      };
    default:
      return state;
  }
}
