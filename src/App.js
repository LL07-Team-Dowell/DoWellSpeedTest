import React from "react";
import Left from "./components/Left";
import RightForm from "./components/RightForm";

const App = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center gap-[60px] sm:flex-col smm:h-[170vh] smn:h-[120vh]">
      <Left />
      <RightForm />
    </div>
  );
};

export default App;
