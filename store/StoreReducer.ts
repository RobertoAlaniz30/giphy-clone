import { INITIAL_STATE_INTERFACE } from "../interfaces/interfaces";
type ACTIONS =
  | {
      type: "SEARCH_GIPTH";
      payload: "";
    }
  | {
      type: "SAVE_FAVORITES_GIPTHS";
      payload:"";
    };

export function storeReducer(state: INITIAL_STATE_INTERFACE, action: ACTIONS){
  const { type, payload } = action;
  console.log('hola')
  switch (type) {
    case "SEARCH_GIPTH":
      return {
        ...state,
        searchedGiph: payload ,
      };
    case "SAVE_FAVORITES_GIPTHS":
      return {
        ...state,
        favoritesGiphs: [''],
      };
    default:
      return {
        ...state,
      };
  }
}
