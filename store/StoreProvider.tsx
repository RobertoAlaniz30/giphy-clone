import React, { createContext, useReducer } from "react";
import { storeReducer } from "./StoreReducer";
import { INITIAL_STATE } from "./INITIAL_STATE"
import { INITIAL_STATE_INTERFACE } from "../interfaces/interfaces"

interface storeContextInterface {
  dispatch: React.Dispatch<any>
  store: INITIAL_STATE_INTERFACE

}
export const StoreContext = createContext<storeContextInterface>({
  store: INITIAL_STATE,
  dispatch: () => null
});
const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }): JSX.Element => {
  const [store, dispatch] = useReducer(storeReducer, INITIAL_STATE,)
  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>;
};
export default StoreProvider