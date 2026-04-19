// GlobalState.js
import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  user: null,
  theme: "light",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

// Create context
const GlobalContext = createContext();

// Provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook (clean usage)
export function useGlobal() {
  return useContext(GlobalContext);
}
