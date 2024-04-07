import React from "react";
import { ResultContextProvider } from "../hooks/context";
import ResultForm from "../components/ResultForm";
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
