import React from "react";
import { ResultContextProvider } from "../../hooks/context";
import ResultForm from "./Components/ResultForm";
import Overlay from "../../components/Overlay";

export function Result() {
  return (
    <ResultContextProvider>
      <Overlay>
        <ResultForm />
      </Overlay>
    </ResultContextProvider>
  );
}
