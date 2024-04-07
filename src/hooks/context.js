import React, { createContext } from "react";
import { useSpeedTest } from "./useSpeedTest";

export const ResultContext = createContext();

export function ResultContextProvider({ children }) {
  const { isLoading, result } = useSpeedTest();
  const val = { isLoading, result };
  return (
    <ResultContext.Provider value={val}>{children}</ResultContext.Provider>
  );
}
