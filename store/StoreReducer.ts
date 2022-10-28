import { INITIAL_STATE_INTERFACE } from "../interfaces/interfaces";
import {parsedGiphObject} from "../interfaces/interfaces";
type ACTIONS =
  | {
      type: "SEARCH_GIPH";
      payload: string;
    }
  | {
      type: "SAVE_FAVORITES_GIPHS";
      payload: parsedGiphObject;
    }
  | {
      type: "LOAD_GIPHS";
      payload: Array<parsedGiphObject>;
    }
  | {
      type: "FETCH_INFINITE_GIPHS";
      payload: Array<parsedGiphObject>;
    }
  | {
      type: "RESET_SEARCH";
      payload: Array<parsedGiphObject>;
    }| {
      type: "RESULTS_SEARCHED_GIPHS";
      payload: Array<parsedGiphObject>
    }| {
      type: "TOOGLE_IS_LOADING";
      payload: boolean
    };

export function storeReducer(state: any, action: ACTIONS) {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_GIPHS":
      return {
        ...state,
        giphs: payload,
        searchedGiphs: payload,
      };
    case "SEARCH_GIPH":
      return {
        ...state,
        textSearchedGiph: payload
      };
      case "RESULTS_SEARCHED_GIPHS":
        return {
          ...state,
          searchedGiphs: payload,
          isLoading: false
        };
    case "FETCH_INFINITE_GIPHS":
      return {
        ...state,
        giphs: [...state.searchedGiphs, ...payload],
        searchedGiphs: [...state.searchedGiphs, ...payload],
      };
    case "SAVE_FAVORITES_GIPHS":
      const filteredGiphs = [...state.giphs];
      let indexOfSelectedGiph = 0;
      filteredGiphs.find((giph, index: number) => {
        if (giph.id == payload.id) indexOfSelectedGiph = index;
      });
      filteredGiphs[indexOfSelectedGiph].selected = true
      return {
        ...state,
        searchedGiphs: filteredGiphs,
        favoritesGiphs: [
          ...state.favoritesGiphs,
          { ...payload, selected: true },
        ],
      };
    case "RESET_SEARCH":
      return {
        ...state,
        searchedGiphs: state.giphs,
        textSearchedGiph: ""
      };
      case "TOOGLE_IS_LOADING":
        return {
          ...state,
          isLoading: true
        };
    default:
      return {
        ...state,
      };
  }
}
