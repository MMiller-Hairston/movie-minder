import { getRandomIndex } from "../utils"
import {
    SET_RESULTS
} from "../actions/appActions"

export const initialState = {
  results: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_RESULTS:
      return {
        ...state,
        results: getRandomIndex(payload.results)
      };
    default:
      return state;
  }
}
