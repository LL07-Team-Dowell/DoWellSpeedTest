import { createContext, useState } from "react";
import { useSpeedTest } from "./useSpeedTest";

export const ResultContext = createContext();

export function ResultContextProvider({ children }) {
  const { isLoading, result } = useSpeedTest();
  const val = { isLoading, result };

  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const contextValue = {
    ...val,
    userEmail,
    setUserEmail,
    userName,
    setUserName,
    userImage,
    setUserImage,
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
}
