import React from "react";
import ResultForm from "../components/ResultForm";
import { ResultContextProvider } from "../hooks/context";
import Overlay from "../components/Overlay";

export function Result() {
  return (
    <ResultContextProvider>
      <Overlay>
        <ResultForm />
      </Overlay>
    </ResultContextProvider>
  );
}
