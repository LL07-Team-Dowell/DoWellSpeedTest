import React, { useContext } from "react";
import { ResultContext } from "../hooks/context";
import { CircularProgress } from "@mui/material";

export default function Overlay({ children }) {
  const resultContext = useContext(ResultContext);

  const { isLoading } = resultContext;

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <CircularProgress size={100} />
        <div style={{ marginTop: "1rem" }}>Loading</div>
      </div>
    );
  }
  return children;
}
