import { useContext } from "react";
import { ResultContext } from "../hooks/context";
import { CircularProgress } from "@mui/material";

export default function Overlay({ children }) {
  const resultContext = useContext(ResultContext);

  const { isLoading } = resultContext;

  if (isLoading) {
    return (
      <div
        className='flex flex-col items-center justify-center w-full h-screen'
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   height: "100vh",
        //   width: "100%",
        // }}
      >
        <CircularProgress size={100} />
        <div className='mt-4'>Loading</div>
      </div>
    );
  }
  return children;
}
